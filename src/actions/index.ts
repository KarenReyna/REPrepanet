export enum ActionType {
    OPEN_LOGIN = 'OPEN_LOGIN',
    CLOSE_LOGIN = 'CLOSE_LOGIN',
    LOGIN_SUBMIT = 'LOGIN_SUBMIT'
};

export type Action = {
    type: ActionType.OPEN_LOGIN,
} | {
    type: ActionType.CLOSE_LOGIN,
}

export function openLogin(): Action {
    return {
        type: ActionType.OPEN_LOGIN,
    }
}

export function closeLogin(): Action {
    return {
        type: ActionType.CLOSE_LOGIN,
    }
}