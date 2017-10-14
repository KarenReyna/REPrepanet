export enum ActionType {
    OPEN_LOGIN = 'OPEN_LOGIN',
    CLOSE_LOGIN = 'CLOSE_LOGIN',
    LOGIN_FAILED = 'LOGIN_FAILED',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_LOADING = 'LOGIN_LOADING',
    LOGOUT_FAILED = 'LOGOUT_FAILED',
    LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
    LOGOUT_LOADING = 'LOGOUT_LOADING',
    OPEN_REGISTER = 'OPEN_REGISTER',
    CLOSE_REGISTER = 'CLOSE_REGISTER',
    REGISTER_FAILED = 'REGISTER_FAILED',
    REGISTER_SUCCESS = 'REGISTER_SUCCESS',
    REGISTER_LOADING = 'REGISTER_LOADING',
    ADMINISTRACION_OPEN = 'ADMINISTRACION_OPEN',
    COLECCIONES_OPEN = 'COLECCIONES_OPEN',
    RECURSOS_OPEN = 'RECURSOS_OPEN',
    LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS'
};

export type Action = {
    type: ActionType.OPEN_LOGIN,
} | {
    type: ActionType.CLOSE_LOGIN,
} | {
    type: ActionType.LOGIN_SUCCESS,
    user: User
} | {
    type: ActionType.LOGIN_FAILED,
    failed: boolean
} | {
    type: ActionType.LOGIN_LOADING,
    loading: boolean
} | {
    type: ActionType.LOGOUT_FAILED,
} | {
    type: ActionType.LOGOUT_LOADING,
} | {
    type: ActionType.LOGOUT_SUCCESS,
} | {
    type: ActionType.OPEN_REGISTER,
} | {
    type: ActionType.CLOSE_REGISTER,
} | {
    type: ActionType.REGISTER_SUCCESS,
    user: User
} | {
    type: ActionType.REGISTER_FAILED,
    failed: boolean
} | {
    type: ActionType.REGISTER_LOADING,
    loading: boolean
} | {
    type: ActionType.ADMINISTRACION_OPEN,
} | {
    type: ActionType.COLECCIONES_OPEN,
} | {
    type: ActionType.RECURSOS_OPEN,
} | {
    type: ActionType.LOAD_USERS_SUCCESS,
    users: User[]
}

export type User = {
    idCustomized: string,
    name: string,
    email: string,
    password: string,
    passwordConf: string,
    privileges: string[],
}

export type LoginAttempt = {
  email: string,
  password: string
}