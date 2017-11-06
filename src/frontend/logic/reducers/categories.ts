import { 
    Category, 
    CategoryActions, 
    Action, 
    Status 
} from 'Config/constants';
import { all, remove, update } from 'Logic/reducers';

export function categories (
    state = {
        update: { open: false, object: {} },
        all: [] as Category[], 
        status: Status.Ready ,
        error: {}
    }, 
    action: Action ) {

    switch(action.type) {

        case CategoryActions.All:
            return all(state, action);

        case CategoryActions.Remove:
            return remove(state, action);

        case CategoryActions.Update:
        return update(state, action);

        default:
            return { ...state }
    }
}