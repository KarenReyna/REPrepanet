import * as Types from '../constants';

export function newResource(state = { visible: false}, action: Types.Action) {
  switch (action.type) {
    case Types.ActionType.NEW_RESOURCE_SHOW:
      return {
        ...state,
        visible: true
      }
    case Types.ActionType.NEW_RESOURCE_HIDE:
      return {
        ...state,
        visible: false
      }
    default:
      return state
  }
}