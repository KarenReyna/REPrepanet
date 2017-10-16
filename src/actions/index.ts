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

// User
export function administrationOpen(): Types.Action {
    return {
        type: Types.ActionType.ADMINISTRATION_OPEN,
    }
}

export function collectionsOpen(): Types.Action {
    return {
        type: Types.ActionType.COLLECTIONS_OPEN,
    }
}

export function resourcesOpen(): Types.Action {
    return {
        type: Types.ActionType.RESOURCES_OPEN,
    }
}

// Collections
export function addCollectionOpen(): Types.Action {
    return {
        type: Types.ActionType.ADDCOLLECTION_OPEN
    }
}

export function addCollectionClose(): Types.Action {
    return {
        type: Types.ActionType.ADDCOLLECTION_CLOSE
    }
}

export function addCollectionLoading(isLoading: boolean) {
    return {
        type: Types.ActionType.REGISTER_LOADING,
        loading: isLoading
    };
}

export function addCollectionSuccess(collection: Types.Collection) {
    return {
        type: Types.ActionType.ADDCOLLECTION_SUCCESS,
        collection: collection,
    };
}

export function loadCollectionsSuccess(collection: Types.Collection[]) {
    return {
        type: Types.ActionType.LOADCOLLECTION_SUCCESS,
        collection: collection, 
    };
}

export function loadUsersSuccess(users: Types.User[]) {
    return {
        type: Types.ActionType.LOAD_USERS_SUCCESS,
        users: users
    }
}