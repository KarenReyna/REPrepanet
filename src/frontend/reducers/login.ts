import * as Types from '../constants';
export function login(state = {visible: false, waiting: false, failed: false}, action: Types.Action) {
  switch (action.type) {
    case Types.ActionType.LOGIN_SHOW:
      return {
        ...state,
        visible: true
      }
    case Types.ActionType.LOGIN_HIDE:
      return {
        ...state,
        visible: false
      }
    case Types.ActionType.LOGIN_WAITING_ON_SERVER:
      return {
        ...state,
        waiting: true
      }
    case Types.ActionType.LOGIN_FAILED:
      return {
        ...state,
        waiting: false,
        failed: true
      }
    default:
      return state
  }
}