import { combineReducers } from 'redux';
import { login } from './login';
import { register } from './register';
import { user } from './user';
import { newResource, resources } from './resources';
import { newCategory, categories } from './categories';
import { users } from './users';
import { contentUser } from './contentUser';
import { tags } from './tags';
import { routerReducer } from 'react-router-redux';

// TODO: Add reducers

const rootReducer = combineReducers({
    //TODO: Add reducers
    login,
    register,
    user,
    newResource,
    resources,
    newCategory,
    categories,
    users,  
    contentUser,
    tags,
    router: routerReducer
});
  
export default rootReducer