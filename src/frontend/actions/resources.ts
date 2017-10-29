import * as Types from '../constants';

export function newResourceShow(): Types.Action {
  return {
      type: Types.ActionType.NEW_RESOURCE_SHOW,
  }
}

export function newResourceHide(): Types.Action {
  return {
      type: Types.ActionType.NEW_RESOURCE_HIDE,
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