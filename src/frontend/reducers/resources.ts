import * as Types from '../constants';

export function newResource(state = { visible: false, failed: false, resource: null }, action: Types.Action) {
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
    case Types.ActionType.NEW_RESOURCE_FAILED:
      return {
        ...state,
        failed: true
      }
    case Types.ActionType.NEW_RESOURCE_SUCCESSFUL:
      return {
        ...state,
        visible: false,
        resource: action.resource
      }
    default:
      return state
  }
}