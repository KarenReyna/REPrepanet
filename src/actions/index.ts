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

export function logoutLoading(isLoading: boolean) {
    return {
        type: Types.ActionType.LOGOUT_LOADING,
        loading: isLoading
    };
}

export function logoutFailed(failed: boolean) {
    return {
        type: Types.ActionType.LOGOUT_FAILED,
        failed: failed
    };
}

export function logoutSuccess() {
    return {
        type: Types.ActionType.LOGOUT_SUCCESS
    };
}

export function registerOpen(): Types.Action {
    return {
        type: Types.ActionType.OPEN_REGISTER,
    }
}

export function registerClose(): Types.Action {
    return {
        type: Types.ActionType.CLOSE_REGISTER,
    }
}

export function registerFailed(failed: boolean) {
    return {
        type: Types.ActionType.REGISTER_FAILED,
        failed: failed
    };
}

export function registerLoading(isLoading: boolean) {
    return {
        type: Types.ActionType.REGISTER_LOADING,
        loading: isLoading
    };
}

export function registerSuccess(user: Types.User) {
    return {
        type: Types.ActionType.REGISTER_SUCCESS,
        user: user
    };
}

// Create New Item Actions
export function openCreate(): Types.Action {
    return {
        type: Types.ActionType.OPEN_CREATE
    };
}

export function closeCreate(): Types.Action {
    return {
        type: Types.ActionType.CLOSE_CREATE
    };
}