import * as Types from '../constants';
import * as LoginAction from './login';
import * as RegisterAction from './register';
import * as UserAction from './user';

export function loginFetch(loginAttempt:Types.LoginAttempt) {
    return (dispatch:any) => {
        dispatch(LoginAction.loginWaitingOnServer(true));

        fetch('http://localhost:8000/api/login/', {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify({
                email: loginAttempt.email,
                password: loginAttempt.password,
            })
        })
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

        fetch('http://localhost:8000/api/register/')
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

        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        fetch('http://localhost:5100/api/register/', {
            mode: 'cors',
            method: 'POST',
            headers:headers,
            body: JSON.stringify({
                username: registerAttempt.name,
                email: registerAttempt.email,
                password: registerAttempt.password,
                passwordConf: registerAttempt.passwordConf,
                privileges: registerAttempt.privileges,
            })
        })
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