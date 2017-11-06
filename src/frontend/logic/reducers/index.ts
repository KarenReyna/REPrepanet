import { combineReducers } from 'redux';
import { Status, Action } from 'Config/constants';
import { resources } from './resources';
import { categories } from './categories';
import { users } from './users';
import { tags } from './tags';
import { routerReducer } from 'react-router-redux';

export function update(state, action:Action) {
    switch(action.status){
        case Status.Ready:
            if(action.object)
            {
                let newState = remove(state, action);
                return {
                    ...newState,
                    all: [
                        ...newState.all,
                        action.object
                    ],
                    status: action.status,
                    update: { open: false, object: {} },
                    error: {}
                }
            }
            return {
                ...state,
                status: action.status,
                update: { open: false, object: {} },
                error: {}
            }
        case Status.WaitingOnServer:
        case Status.WaitingOnUser:
        case Status.Failed:
            return {
                ...state,
                status: action.status,
                update: { open: true, object: action.object },
                error: action.error
            }
        default:
            return {
                ...state,
                status: action.status,
                error: action.error
            }
    }
}

export function remove(state, action: Action) {
    let objects: any[];
    let index: number;

    switch(action.status) {
        case Status.Ready:
            objects = state.all;
            if(objects && objects.length > 0)
            {
                index = objects.indexOf(action.object);
                objects = objects.splice(index, 1);
                return {
                    ...state,
                    all: objects,
                    status: action.status,
                    error: {}
                }
            }
            return { 
                ...state, 
                status: action.error
            }

        default:
            return {
                ...state,
                status: action.status,
                error: action.error,
            }
    }
}

export function all(state, action) {
    return {
        ...state,
        status: action.status,
        all: action.object,
        error: action.error
    }
}

const rootReducer = combineReducers({
    resources,
    categories,
    users,
    tags,
    router: routerReducer
});
  
export default rootReducer