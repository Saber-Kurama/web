import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { applyMiddleware } from 'redux';
import catchPromise from 'redux-catch-promise';

function getEnvMiddleware() {
  if (__DEVELOPMENT__ || __TEST__) {
    return require('./development');
  } else {
    return require('./production');
  }
}

const promiseCatcher = catchPromise((promised, action, store) => {
  // looking for promises?
});

export default applyMiddleware(
  // promiseCatcher,
  thunk,
  promise,
  ...getEnvMiddleware()
);
