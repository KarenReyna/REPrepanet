import * as Types from '../constants';

export function registerShow(): Types.Action {
  return {
      type: Types.ActionType.REGISTER_SHOW,
  }
}

export function registerHide(): Types.Action {
  return {
      type: Types.ActionType.REGISTER_HIDE,
  }
}

export function registerFailed() {
  return {
      type: Types.ActionType.REGISTER_FAILED,
      failed: true
  };
}

export function registerWaitingOnServer(waiting: boolean) {
  return {
      type: Types.ActionType.REGISTER_WAITING_ON_SERVER,
      waiting: waiting
  };
}

export function registerSuccessful(user: Types.User) {
  return {
      type: Types.ActionType.REGISTER_SUCCESSFUL,
      user: user
  };
}