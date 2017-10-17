import * as Types from '../constants';

export function loginShow(): Types.Action {
  return {
      type: Types.ActionType.LOGIN_SHOW,
  }
}

export function loginHide(): Types.Action {
  return {
      type: Types.ActionType.LOGIN_HIDE,
  }
}

export function loginFailed(): Types.Action {
  return {
      type: Types.ActionType.LOGIN_FAILED
  };
}

export function loginWaitingOnServer(waiting: boolean): Types.Action {
  return {
      type: Types.ActionType.LOGIN_WAITING_ON_SERVER,
      waiting: waiting
  };
}

export function loginSuccessful(user: Types.User): Types.Action {
  return {
      type: Types.ActionType.LOGIN_SUCCESSFUL,
      user: user
  };
}