import * as Types from '../constants';

export function resourceDialog(state = { visible: false, failed: false, resource: null }, action: Types.Action) {
  switch (action.type) {
    case Types.ActionType.RESOURCE_DIALOG_SHOW:
      return {
        ...state,
        resource: action.resource,
        visible: true
      }
    case Types.ActionType.RESOURCE_DIALOG_HIDE:
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
        visible: false
      }
    case Types.ActionType.EDIT_RESOURCE_FAILED:
      return {
        ...state,
        failed: true
      }
    case Types.ActionType.EDIT_RESOURCE_SUCCESSFUL:
      return {
        ...state,
        visible: false
      }
    default:
      return state
  }
}

export function resources(state = [] as Types.Resource[], action: Types.Action) {
  let resourceList: Types.Resource[] = []
  switch (action.type) {
    case Types.ActionType.LOAD_RESOURCES_SUCCESSFUL:
      return action.resources

    case Types.ActionType.NEW_RESOURCE_SUCCESSFUL:
      return [
        ...state,
        action.resource
      ]

    case Types.ActionType.EDIT_RESOURCE_SUCCESSFUL:
      resourceList = state;
      resourceList = resourceList.filter((resource) => {
        resource._id != action.resource._id
      });
      return [
        ...resourceList,
        action.resource
      ]

    case Types.ActionType.DELETE_RESOURCE_SUCCESSFUL:
      resourceList = state;
      resourceList = resourceList.filter((resource) => {
        resource._id != action.id
      });
      return [
        ...resourceList
      ]

    default:
      return state
  }
}