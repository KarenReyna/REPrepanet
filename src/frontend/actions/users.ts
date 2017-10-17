import * as Types from '../constants';

export function loadUsersSuccessful(users: Types.User[]) {
    return {
        type: Types.ActionType.LOAD_USERS_SUCCESSFUL,
        users: users
    }
}