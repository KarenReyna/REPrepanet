import * as Types from '../constants';

export function create(state = {open: false}, action: Types.Action) {
    switch (action.type) {
      case Types.ActionType.OPEN_CREATE:
        return {
            ...state,
            open: true
        }
      case Types.ActionType.CLOSE_CREATE:
        return {
            ...state,
            open: false
        }
      default:
        return state
    }
}