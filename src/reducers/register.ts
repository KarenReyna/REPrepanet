import * as Types from '../constants';
export function register(state = {open: false, loading: false, failed: false}, action: Types.Action) {
  switch (action.type) {
    case Types.ActionType.OPEN_REGISTER:
      return {
        ...state,
        open: true
      }
    case Types.ActionType.CLOSE_REGISTER:
      return {
        ...state,
        open: false
      }
    case Types.ActionType.REGISTER_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    case Types.ActionType.REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        failed: action.failed
      }
    default:
      return state
  }
}