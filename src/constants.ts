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
    ADMINISTRATION_OPEN = 'ADMINISTRATION_OPEN',
    COLLECTIONS_OPEN = 'COLLECTIONS_OPEN',
    RESOURCES_OPEN = 'RESOURCES_OPEN',
    LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS',
    ADDCOLLECTION_OPEN = 'ADDCOLLECTION_OPEN',
    ADDCOLLECTION_CLOSE = 'ADDCOLLECTION_CLOSE',
    ADDCOLLECTION_LOADING = 'ADDCOLLECTION_LOADING',
    ADDCOLLECTION_SUCCESS = 'ADDCOLLECTION_SUCCESS',
    LOADCOLLECTION_SUCCESS = 'LOADCOLLECTION_SUCCESS',
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
    type: ActionType.ADMINISTRATION_OPEN,
} | {
    type: ActionType.COLLECTIONS_OPEN,
} | {
    type: ActionType.RESOURCES_OPEN,
} | {
    type: ActionType.LOAD_USERS_SUCCESS,
    users: User[]
} | {
    type: ActionType.ADDCOLLECTION_OPEN,
} | {
    type: ActionType.ADDCOLLECTION_CLOSE,
} | {
    type: ActionType.ADDCOLLECTION_LOADING,
} | {
    type: ActionType.ADDCOLLECTION_SUCCESS,
    collection: Collection
} | {
    type: ActionType.LOADCOLLECTION_SUCCESS,
    collection: Collection
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

export type Collection = {
    name: string, 
    description: string, 
}