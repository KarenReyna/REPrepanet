import { combineReducers } from 'redux';
import { login } from './login';
import { register } from './register';
import { user } from './user';
import { create } from './create';

// TODO: Add reducers

const rootReducer = combineReducers({
    //TODO: Add reducers
    login,
    register,
    user,
    create
});
  
export default rootReducer