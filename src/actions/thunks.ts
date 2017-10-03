import * as Types from '../constants';
import * as Action from './';

export function loginFetch(loginAttempt: Types.LoginAttempt) {
    return (dispatch: any) => {
        dispatch(Action.loginLoading(true));

        fetch('http://localhost:8000/api/login/', {
            mode: 'no-cors',
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

            dispatch(Action.loginLoading(false));

            return response;
        })
        .then((response) => response.json())
        .then((user) => dispatch(Action.loginSuccess(user as Types.User)))
        .catch(() => dispatch(Action.loginFailed(true)));
    };
}

export function logoutFetch() {
    return (dispatch: any) => {
        dispatch(Action.loginLoading(true));

        fetch('http://localhost:8000/api/register/')
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(Action.logoutLoading(false));

            return response;
        })
        .then((response) => response.json())
        .then(() => dispatch(Action.logoutSuccess()))
        .catch(() => dispatch(Action.logoutFailed(true)));
    };
}

export function registerFetch(registerAttempt: Types.User) {
    return (dispatch: any) => {
        dispatch(Action.registerLoading(true));

        fetch('http://localhost:8000/api/register/', {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',                  
            },
            body: JSON.stringify({
                name: registerAttempt.name,
                email: registerAttempt.email,
                password: registerAttempt.password,
                passwordConf: registerAttempt.passwordConf,
                privileges: registerAttempt.privileges,
            })
        })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(Action.registerLoading(false));

            return response;
        })
        .then((response) => response.json())
        .then((user) => dispatch(Action.registerSuccess(user as Types.User)))
        .catch(() => dispatch(Action.registerFailed(true)));
    };
}