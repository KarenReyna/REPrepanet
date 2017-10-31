import * as Types from '../constants';

export function resourceDialogShow(resource: Types.Resource = {_id: ''}):
  Types.Action {
  return {
      type: Types.ActionType.RESOURCE_DIALOG_SHOW,
      resource: resource
  }
}

export function resourceDialogHide(): Types.Action {
  return {
      type: Types.ActionType.RESOURCE_DIALOG_HIDE,
  }
}

export function newResourceSuccessful(resource: Types.Resource) {
  return {
      type: Types.ActionType.NEW_RESOURCE_SUCCESSFUL,
      resource: resource,
  };
}

export function newResourceFailed(): Types.Action {
  return {
      type: Types.ActionType.NEW_RESOURCE_FAILED
  };
}

export function loadResourcesSuccessful(resources: Types.Resource[]) {
  return {
    type: Types.ActionType.LOAD_RESOURCES_SUCCESSFUL,
    resources: resources
  };
}

export function editResourceSuccessful(resource: Types.Resource) {
  return {
      type: Types.ActionType.EDIT_RESOURCE_SUCCESSFUL,
      resource: resource,
  };
}

export function editResourceFailed(): Types.Action {
  return {
      type: Types.ActionType.EDIT_RESOURCE_FAILED
  };
}

export function deleteResourceSuccessful(id: string): Types.Action {
  return {
      type: Types.ActionType.DELETE_RESOURCE_SUCCESSFUL,
      id: id
  };
}

export function deleteResourceFailed(): Types.Action {
  return {
      type: Types.ActionType.DELETE_RESOURCE_FAILED
  };
}