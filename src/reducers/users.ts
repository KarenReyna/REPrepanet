import * as Types from '../constants';

export function users(state = [] as Types.User[], action: Types.Action) {
  switch (action.type) {
    case Types.ActionType.LOAD_USERS_SUCCESS:
      return action.users
    case Types.ActionType.REGISTER_SUCCESS:
      return [
        ...state,
        action.user
      ]
    default:
      return state
  }
}