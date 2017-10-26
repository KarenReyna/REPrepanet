import * as Types from '../constants';
export function register(state = {visible: false, waiting: false, failed: false}, action: Types.Action) {
  switch (action.type) {
    case Types.ActionType.REGISTER_SHOW:
      return {
        ...state,
        visible: true
      }
    case Types.ActionType.REGISTER_HIDE:
      return {
        ...state,
        visible: false
      }
    case Types.ActionType.REGISTER_WAITING_ON_SERVER:
      return {
        ...state,
        waiting: true
      }
    case Types.ActionType.REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        failed: true
      }
    case Types.ActionType.REGISTER_SUCCESSFUL:
      return {
        ...state,
        visible: false
      }
    default:
      return state
  }
}