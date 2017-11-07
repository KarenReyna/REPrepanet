import { 
    User, 
    LoginAttempt, 
    UserActions, 
    Status 
} from 'Config/constants';
import { createAction } from 'Logic/actions';
import { post, get, del } from 'Logic/actions/thunks';

export function login(loginAttempt: LoginAttempt) {
    return (dispatch: any) => {
        dispatch(createAction(UserActions.Login, null, 
            null, Status.WaitingOnServer));
        post(loginAttempt, 'api/users/login/')
            .then(user => dispatch(
                createAction(UserActions.Login, user as User, null, 
                    Status.Ready)))
            .catch((error) => dispatch(
                createAction(UserActions.Login, null, error, 
                    Status.Failed)));
    };
}

export function logout() {
    return (dispatch:any) => {
        dispatch(createAction(UserActions.Logout, null, 
            null, Status.WaitingOnServer));
        get('api/users/logout')
            .then(() => dispatch(
                createAction(UserActions.Logout, null, null, 
                    Status.Ready)))
            .catch((error) => dispatch(
                createAction(UserActions.Logout, null, error, 
                    Status.Failed)));
    };
}

export function update(user: User) {
    return (dispatch: any) => {
        dispatch(createAction(UserActions.Update, null, 
            null, Status.WaitingOnServer));
        post(user, 'api/users/update/')
            .then(user => dispatch(
                createAction(UserActions.Update, user as User, 
                    null, Status.Ready)))
            .catch((error) => dispatch(
                createAction(UserActions.Update, null, error, 
                    Status.Failed)));
    };
}

// export function create(registerAttempt: User) {
//     return (dispatch: any) => {
//         dispatch(createAction(UserActions.New, null, 
//             null, Status.WaitingOnServer));
//         post(registerAttempt, 'api/users/new/')
//             .then(user => dispatch(
//                 createAction(UserActions.New, user as User, null, 
//                     Status.Ready)))
//             .catch((error) => dispatch(
//                 createAction(UserActions.New, null, error, Status.Failed)));
//     };
// }

export function all() {
    return (dispatch:any) => {
        dispatch(createAction(UserActions.All, null, 
            null, Status.WaitingOnServer));
        get('api/users')
            .then((users) => dispatch(
                createAction(UserActions.All, users as User[], null, 
                    Status.Ready)))
            .catch((error) => dispatch(
                createAction(UserActions.All, null, error, Status.Failed)));
    };
}

// export function edit(user: User) {
//     return (dispatch: any) => {
//         dispatch(createAction(UserActions.Edit, null, 
//             null, Status.WaitingOnServer));
//         post(user, 'api/users/' + user._id + '/edit/')
//             .then(user => dispatch(
//                 createAction(UserActions.Edit, user as User, null, 
//                     Status.Ready)))
//             .catch((error) => dispatch(
//                 createAction(UserActions.Edit, null, error, Status.Failed)));
//     };
// }

export function remove(userId: string) {
    return (dispatch:any) => {
        dispatch(createAction(UserActions.Remove, null, 
            null, Status.WaitingOnServer));
        del('api/users/' + userId)
            .then(() => dispatch(
                createAction(UserActions.Remove, null, null, Status.Ready)))
            .catch((error) => dispatch(
                createAction(UserActions.Remove, null, error, 
                    Status.Failed)));
    };
}