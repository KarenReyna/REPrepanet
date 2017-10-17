import * as Types from '../constants';

export function users(state = [] as Types.User[], action: Types.Action) {
  switch (action.type) {
    case Types.ActionType.LOAD_USERS_SUCCESSFUL:
      return action.users
    case Types.ActionType.REGISTER_SUCCESSFUL:
      return [
        ...state,
        action.user
      ]
    default:
      return state
  }
}