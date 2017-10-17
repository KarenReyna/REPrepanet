export enum ActionType {
    LOGIN_SHOW = 'LOGIN_SHOW',
    LOGIN_HIDE = 'LOGIN_HIDE',
    LOGIN_FAILED = 'LOGIN_FAILED',
    LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL',
    LOGIN_WAITING_ON_SERVER = 'LOGIN_WAITING_ON_SERVER',

    LOGOUT = 'LOGOUT',

    REGISTER_SHOW = 'REGISTER_SHOW',
    REGISTER_HIDE = 'REGISTER_HIDE',
    REGISTER_FAILED = 'REGISTER_FAILED',
    REGISTER_SUCCESSFUL = 'REGISTER_SUCCESSFUL',
    REGISTER_WAITING_ON_SERVER = 'REGISTER_WAITING_ON_SERVER',

    NEW_RESOURCE_SHOW = 'NEW_RESOURCE_SHOW',
    NEW_RESOURCE_HIDE = 'NEW_RESOURCE_HIDE',
};

export type Action = {
    type: ActionType.LOGIN_SHOW,
} | {
    type: ActionType.LOGIN_HIDE,
} | {
    type: ActionType.LOGIN_SUCCESSFUL,
    user: User
} | {
    type: ActionType.LOGIN_FAILED,
} | {
    type: ActionType.LOGIN_WAITING_ON_SERVER,
    waiting: boolean
} | {
    type: ActionType.LOGOUT,
} | {
    type: ActionType.REGISTER_SHOW,
} | {
    type: ActionType.REGISTER_HIDE,
} | {
    type: ActionType.REGISTER_SUCCESSFUL,
    user: User
} | {
    type: ActionType.REGISTER_FAILED,
} | {
    type: ActionType.REGISTER_WAITING_ON_SERVER,
} | {
    type: ActionType.NEW_RESOURCE_SHOW,
} | {
    type: ActionType.NEW_RESOURCE_HIDE,
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

export var fetchHeader = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
}

export var serverUrl = "http://localhost:8000/"