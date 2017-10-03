import * as Types from '../constants';

export function loginOpen(): Types.Action {
    return {
        type: Types.ActionType.OPEN_LOGIN,
    }
}

export function loginClose(): Types.Action {
    return {
        type: Types.ActionType.CLOSE_LOGIN,
    }
}

export function loginFailed(failed: boolean) {
    return {
        type: Types.ActionType.LOGIN_FAILED,
        failed: failed
    };
}

export function loginLoading(isLoading: boolean) {
    return {
        type: Types.ActionType.LOGIN_LOADING,
        loading: isLoading
    };
}

export function loginSuccess(user: Types.User) {
    return {
        type: Types.ActionType.LOGIN_SUCCESS,
        user: user
    };
}