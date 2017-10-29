import { combineReducers } from 'redux';
import { login } from './login';
import { register } from './register';
import { user } from './user';
import { newResource } from './resources';
import { newCategory } from './categories';
import { users } from './users';
import { contentUser } from './contentUser';
import { routerReducer } from 'react-router-redux';

// TODO: Add reducers

const rootReducer = combineReducers({
    //TODO: Add reducers
    login,
    register,
    user,
    newResource,
    newCategory,
    users,  
    contentUser,
    router: routerReducer
});
  
export default rootReducer