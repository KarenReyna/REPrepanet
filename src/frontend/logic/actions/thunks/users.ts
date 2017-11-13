import { 
    User, 
    UserActions, 
    Status 
} from 'Config/constants';
import { createAction } from 'Logic/actions';
import { post, get, del } from 'Logic/actions/thunks';

export function update(user: User) {
    return (dispatch: any) => {
        dispatch(createAction(UserActions.Update, null, 
            null, Status.WaitingOnServer));
        post(user, 'api/users/update/')
            .then(response => dispatch(
                createAction(UserActions.Update, response.user as User, 
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
        get('api/users/')
            .then((response) => dispatch(
                createAction(UserActions.All, response.users as User[], null, 
                    Status.Ready)))
            .catch((error) => {dispatch(
                createAction(UserActions.Remove, null, error, 
                    Status.Failed))
            });
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
            .catch((error) => {
                const status = error.response ? error.response.status : 500
                if (status === 404) {
                  console.log('Not found');
                } else {
                  console.log('Other error');
                }
                dispatch(
                createAction(UserActions.Remove, null, error, 
                    Status.Failed))
            });
    };
}