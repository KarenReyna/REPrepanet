import {
    Resource,
    ResourceActions,
    Action,
    Status
} from 'Config/constants';
import { all, remove, update } from 'Logic/reducers';

export function resources (
    state = {
        update: { open: false, object: {} },
        all: [] as Resource[],
        status: Status.Ready,
        error: {}
    },
    action: Action ) {

    switch(action.type) {

        case ResourceActions.All:
            return all(state, action);

        case ResourceActions.Remove:
            return remove(state, action);

        case ResourceActions.Update:
            return update(state, action);

        default:
            return {
                ...state
            }
    }
}