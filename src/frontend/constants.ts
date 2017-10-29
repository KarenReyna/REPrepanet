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
    NEW_RESOURCE_FAILED = 'NEW_RESOURCE_FAILED',
    NEW_RESOURCE_SUCCESSFUL = 'NEW_RESOURCE_SUCCESSFUL',
    LOAD_RESOURCES_SUCCESSFUL = 'LOAD_RESOURCES_SUCCESSFUL',

    NEW_CATEGORY_SHOW = 'NEW_CATEGORY_SHOW',
    NEW_CATEGORY_HIDE = 'NEW_CATEGORY_HIDE',
    NEW_CATEGORY_FAILED = 'NEW_CATEGORY_FAILED',
    NEW_CATEGORY_SUCCESSFUL = 'NEW_CATEGORY_SUCCESSFUL',
    LOAD_CATEGORIES_SUCCESSFUL = 'LOAD_CATEGORIES_SUCCESSFUL',

    ADMINISTRATION_SHOW = 'ADMINSITRATION_SHOW',
    CATEGORIES_SHOW = 'CATEGORIES_SHOW',
    RESOURCES_SHOW = 'RESOURCES_SHOW',

    LOAD_USERS_SUCCESSFUL = 'LOAD_USERS_SUCCESSFUL',
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
} | {
    type: ActionType.NEW_RESOURCE_FAILED,
} | {
    type: ActionType.NEW_RESOURCE_SUCCESSFUL,
    resource: Resource,
} | {
    type: ActionType.LOAD_RESOURCES_SUCCESSFUL,
    resources: Resource,
} | {
    type:ActionType.NEW_CATEGORY_SHOW,
} | {
    type: ActionType.NEW_CATEGORY_HIDE,
} | {
    type: ActionType.NEW_CATEGORY_FAILED, 
} | {
    type: ActionType.NEW_CATEGORY_SUCCESSFUL,
    category: Category,
} | {
    type: ActionType.LOAD_CATEGORIES_SUCCESSFUL,
    categories: Category,
} | {
    type: ActionType.ADMINISTRATION_SHOW,
} | {
    type: ActionType.CATEGORIES_SHOW,
} | {
    type: ActionType.RESOURCES_SHOW,
} | {
    type: ActionType.LOAD_USERS_SUCCESSFUL,
    users: User
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

export type Category = {
    name: string,
    description: string,
}

export type Resource = {
    name: string,
    description: string,
    url: string,
    imageurl: string,
    category: string,
    tags: string[]
}

export var fetchHeader = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
}

export var serverUrl = "http://localhost:5100/"
