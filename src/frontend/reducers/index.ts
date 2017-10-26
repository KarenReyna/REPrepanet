import { combineReducers } from 'redux';
import { login } from './login';
import { register } from './register';
import { user } from './user';
import { newResource } from './resources';
import { users } from './users';
import { contentUser } from './contentUser';
import { addCollection } from './addCollection';

// TODO: Add reducers

const rootReducer = combineReducers({
    //TODO: Add reducers
    login,
    register,
    user,
    newResource,
    users,  
    contentUser,
    addCollection, 
});
  
export default rootReducer