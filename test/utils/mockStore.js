import { applyMiddleware } from 'redux';

export default (middlewares = []) =>
  (getState, expectedActions, done) => {
    if (!expectedActions) {
      throw new Error('expectedActions should be an expected action or an array of actions.');
    } else if (!Array.isArray(expectedActions)) {
      expectedActions = [expectedActions]
    }

    if (typeof done !== 'undefined' && typeof done !== 'function') {
      throw new Error('done should either be undefined or function.');
    }

    function mockStoreWithoutMiddleware() {
      const self = {
        getState() {
          return typeof getState === 'function' ?
            getState() :
            getState;
        },

        dispatch(action) {
          if (action instanceof Function) {
            return action(self)
          }

          const expectedAction = expectedActions.shift();

          try {
            expect(action).toEqual(expectedAction);
            if (done && !expectedActions.length) {
              done();
            }
            return action;
          } catch (e) {
            if (done) {
              done(e);
            } else {
              throw e;
            }
          }
        }
      };

      return self;
    }

    const mockStoreWithMiddleware = applyMiddleware(
      ...middlewares
    )(mockStoreWithoutMiddleware);

    return mockStoreWithMiddleware();
  }
