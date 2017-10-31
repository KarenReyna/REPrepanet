import * as Types from '../constants';
export function deleteUser(state = {visible: false}, action: Types.Action) {
  switch (action.type) {
    case Types.ActionType.DELETE_USER_SHOW:
      return {
        ...state,
        visible: true
      }
    case Types.ActionType.DELETE_USER_HIDE:
      return {
        ...state,
        visible: false
      }
    case Types.ActionType.DELETE_USER_WAITING_ON_SERVER:
      return {
        ...state,
        waiting: true
      }
    case Types.ActionType.DELETE_USER_FAILED:
      return {
        ...state,
        loading: false,
        failed: true
      }
    case Types.ActionType.DELETE_USER_SUCCESSFUL:
      return {
        ...state,
        visible: false
      }
    default:
      return state
  }
}