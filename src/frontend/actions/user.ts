import * as Types from '../constants';

export function logoutWaitingOnServer() {
    return {
        type: Types.ActionType.LOGOUT,
        waiting: true
    };
}

export function logoutFailed(failed: boolean) {
    return {
        type: Types.ActionType.LOGOUT,
        failed: failed
    };
}

export function logoutSuccessful() {
    return {
        type: Types.ActionType.LOGOUT
    };
}

