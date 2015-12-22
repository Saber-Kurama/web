import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';
import { reducer as form } from 'redux-form';

import auth from './auth';

export default combineReducers({
  routing,
  form,

  auth
});
