import * as Types from '../constants';

export function deleteUserShow(): Types.Action {
  return {
      type: Types.ActionType.DELETE_USER_SHOW,
  }
}

export function deleteUserHide(): Types.Action {
  return {
      type: Types.ActionType.DELETE_USER_HIDE,
  }
}

export function deleteUserFailed() {
  return {
      type: Types.ActionType.DELETE_USER_FAILED,
      failed: true
  };
}

export function deleteUserWaitingOnServer(waiting: boolean) {
  return {
      type: Types.ActionType.DELETE_USER_WAITING_ON_SERVER,
      waiting: waiting
  };
}

export function deleteUserSuccessful(user: Types.User) {
  return {
      type: Types.ActionType.DELETE_USER_SUCCESSFUL,
      user: user
  };
}