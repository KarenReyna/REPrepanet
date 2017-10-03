export enum ActionType {
    OPEN_LOGIN = 'OPEN_LOGIN',
    CLOSE_LOGIN = 'CLOSE_LOGIN',
    SUBMIT_LOGIN = 'SUBMIT_LOGIN',
    LOGIN_FAILED = 'LOGIN_FAILED',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_LOADING = 'LOGIN_LOADING'
};

export type Action = {
    type: ActionType.OPEN_LOGIN,
} | {
    type: ActionType.CLOSE_LOGIN,
} | {
    type: ActionType.SUBMIT_LOGIN,
    email: string,
    password: string
} | {
    type: ActionType.LOGIN_SUCCESS,
    user: User
} | {
    type: ActionType.LOGIN_FAILED,
    failed: boolean
} | {
    type: ActionType.LOGIN_LOADING,
    loading: boolean
}

export type User = {
  name: string,
  email: string,
  password: string,
  createdAt: string
}

export type LoginAttempt = {
  email: string,
  password: string
}