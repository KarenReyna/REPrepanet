export enum UserActions {
    Update = 'UPDATE_USER',
    All = 'ALL_USERS',
    Login = 'LOGIN',
    Logout = 'LOGOUT',
    Remove = 'REMOVE_USER'
}

export enum CategoryActions {
    Update = 'UPDATE_CATEGORY',
    All = 'ALL_CATEGORIES',
    Remove = 'REMOVE_CATEGORY'
}

export enum ResourceActions {
    Update = 'UPDATE_RESOURCE',
    All = 'ALL_RESOURCES',
    Remove = 'REMOVE_RESOURCE'
}

export enum TagActions {
    Update = 'UPDATE_TAG',
    All = 'ALL_TAGS',
    Remove = 'REMOVE_TAG'
}

export enum Status {
    WaitingOnServer = 'WAITING_ON_SERVER',
    WaitingOnUser = 'WAITING_ON_USER',
    Ready = 'READY',
    Failed = 'FAILED'
}

export type Action = {
    type: UserActions | CategoryActions | ResourceActions | TagActions,
    object: any,
    error: any,
    status: Status
}

export type User = {
    name?: string,
    email?: string,
    password?: string,
    passwordConf?: string,
    privileges?: string[],
    _id?: string
}

export type LoginAttempt = {
    email: string,
    password: string
}

export type Category = {
    _id?: string,
    name?: string,
    description?: string,
}

export type Resource = {
    _id?: string,
    name?: string,
    description?: string,
    url?: string,
    imageurl?: string,
    category?: string,
    tags?: string[]
}

export type Tag = {
    _id?: string,
    name?: string
}

export var fetchHeader = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
}

export var serverUrl = "http://localhost:8000/"
