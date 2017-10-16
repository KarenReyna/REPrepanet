import { combineReducers } from 'redux';
import { login } from './login';
import { register } from './register';
import { user } from './user';

// TODO: Add reducers

const rootReducer = combineReducers({
    //TODO: Add reducers
    login,
    register,
    user
});
  
export default rootReducer