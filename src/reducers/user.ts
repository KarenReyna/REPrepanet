import * as Types from '../constants';

export function user(state = {idCustomized: '-1'} as Types.User, action: Types.Action) {
  switch (action.type) {
    case Types.ActionType.LOGIN_SUCCESS:
      return {
        user: action.user
      }
    case Types.ActionType.LOGOUT_SUCCESS:
      return {
        user: {
          idCustomized: '-1'
        }
      }
    default:
      return state
  }
}