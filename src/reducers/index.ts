import { combineReducers } from 'redux';
import { login } from './login';
import { register } from './register';
import { user } from './user';
import { contentUser } from './contentUser';
import { addCollection } from './addCollection';

// TODO: Add reducers

const rootReducer = combineReducers({
    //TODO: Add reducers
    login,
    register,
    user, 
    contentUser,
    addCollection, 
});
  
export default rootReducer