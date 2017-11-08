import { 
    User, 
    UserActions, 
    Action, 
    Status 
} from 'Config/constants';
import { all, remove, update } from 'Logic/reducers';

function login(state, action: Action) {
    switch(action.status){
        case Status.Ready:
            return {
                ...state,
                current: action.object,
                status: action.status,
                login: { open: false },
                error: {}
            }
        case Status.WaitingOnServer:
            return {
                ...state,
                status: action.status,
            }
        case Status.WaitingOnUser:
        case Status.Failed:
            return {
                ...state,
                status: action.status,
                login: { open: true },
                error: action.error
            }
        default:
            return {
                ...state,
                status: action.status,
                error: {}
            }
    }
}

function logout(state) {
    return {
        ...state,
        current: {}
    }
}

export function users (
    state = {
        login: { open: false },
        update: { open: false, object: {} },
        current: {} as User,
        all: [] as User[],
        status: Status.Ready,
        error: {}
    },
    action: Action ) {

    switch(action.type) {
        case UserActions.All:
            return all(state, action);

        case UserActions.Remove:
            return remove(state, action);

        case UserActions.Update:
        return update(state, action);

        case UserActions.Login:
            return login(state, action);

        case UserActions.Logout:
            return logout(state);

        default:
            return state;
    }
}