import { combineReducers } from 'redux';
import { login } from './login';
import { register } from './register';
import { user } from './user';
import { contenido } from './contenido';
import { users } from './users';

// TODO: Add reducers

const rootReducer = combineReducers({
    //TODO: Add reducers
    login,
    register,
    contenido, 
    user,
    users
});
  
export default rootReducer