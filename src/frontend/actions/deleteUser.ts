import * as Types from '../constants';

export function deleteUserShow(deleteUserData: Types.User): Types.Action {
  return {
      type: Types.ActionType.DELETE_USER_SHOW,
      user: deleteUserData
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

export function deleteUserSuccessful(deleteUserData: Types.User) {
  return {
      type: Types.ActionType.DELETE_USER_SUCCESSFUL,
      user: deleteUserData
  };
}