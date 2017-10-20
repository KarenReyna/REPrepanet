import { combineReducers } from 'redux';
import { login } from './login';
import { register } from './register';
import { user } from './user';
import { users } from './users';
import { contentUser } from './contentUser';
import { addCollection } from './addCollection';
import { routerReducer } from 'react-router-redux'

// TODO: Add reducers

const rootReducer = combineReducers({
    //TODO: Add reducers
    login,
    register,
    user,
    users,  
    contentUser,
    addCollection, 
    router: routerReducer
});
  
export default rootReducer