import * as Types from '../constants';
export function login(state = {open: false, loading: false}, action: Types.Action) {
  switch (action.type) {
    case Types.ActionType.OPEN_LOGIN:
      return {
        ...state,
        open: true
      }
    case Types.ActionType.CLOSE_LOGIN:
      return {
        ...state,
        open: false
      }
    case Types.ActionType.LOGIN_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    default:
      return state
  }
}