import { combineReducers } from 'redux';

import authReducer from './reducers/authReducer';
import getUsers from './reducers/UserReducer';


export default combineReducers({
  authReducer,
  //getUsers
});