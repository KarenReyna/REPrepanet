import {
    Tag,
    TagActions,
    Action,
    Status
} from 'Config/constants';

export function tags (
    state = {
        all: [] as Tag[],
        error: {},
        status: Status.Ready
    }, 
    action: Action ) {

    switch(action.type) {

        case TagActions.All:
            switch(action.status) {
                case Status.Ready: {
                    return {
                        all: action.object,
                        error: {},
                        status: action.status
                    }
                }
                default: {
                    return {
                        ...state,
                        status: action.status,
                        error: action.error
                    }
                }
            }
        default:
            return {
                ...state
            }
    }
}