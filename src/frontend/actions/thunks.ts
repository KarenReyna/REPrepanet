import * as Types from '../constants';
import * as LoginAction from './login';
import * as RegisterAction from './register';
import * as UserAction from './user';

function request(object: any, route: string) {
    return fetch(Types.serverUrl + route, {
        mode: 'cors',
        method: 'POST',
        headers: Types.fetchHeader,
        body: JSON.stringify({
            ...object
        })
    })
}

export function loginFetch(loginAttempt:Types.LoginAttempt) {
    return (dispatch:any) => {
        dispatch(LoginAction.loginWaitingOnServer(true));

        request(loginAttempt, 'api/login')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(LoginAction.loginWaitingOnServer(false));

                return response;
            })
            .then((response) => response.json())
            .then((user) => dispatch(LoginAction.loginSuccessful(user as Types.User)))
            .catch(() => dispatch(LoginAction.loginFailed()));
    };
}

// TODO this looks weird combining login/logout
export function logoutFetch() {
    return (dispatch:any) => {
        dispatch(LoginAction.loginWaitingOnServer(true));

        fetch(Types.serverUrl + 'api/register/')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(UserAction.logoutWaitingOnServer());

                return response;
            })
            .then((response) => response.json())
            .then(() => dispatch(UserAction.logoutSuccessful()))
            .catch(() => dispatch(UserAction.logoutFailed(true)));
    };
}

export function registerFetch(registerAttempt:Types.User) {
    return (dispatch:any) => {
        dispatch(RegisterAction.registerWaitingOnServer(true));

        request(registerAttempt, 'api/register')
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(RegisterAction.registerWaitingOnServer(false));

                return response;
            })
            .then((response) => response.json())
            .then((user) => dispatch(RegisterAction.registerSuccessful(user as Types.User)))
            .catch(() => dispatch(RegisterAction.registerFailed()));
    };
}