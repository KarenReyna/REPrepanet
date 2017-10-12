import * as Types from '../constants';
import * as Action from './';

export function loginFetch(loginAttempt:Types.LoginAttempt) {
    return (dispatch:any) => {
        dispatch(Action.loginLoading(true));

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

                dispatch(Action.loginLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((user) => dispatch(Action.loginSuccess(user as Types.User)))
            .catch(() => dispatch(Action.loginFailed(true)));
    };
}

export function logoutFetch() {
    return (dispatch:any) => {
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

export function registerFetch(registerAttempt:Types.User) {
    return (dispatch:any) => {
        dispatch(Action.registerLoading(true));

        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        fetch('http://localhost:5100/api/register/', {
            mode: 'cors',
            method: 'POST',
            headers:headers,
            body: JSON.stringify({
                name: registerAttempt.name,
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

                dispatch(Action.registerLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((user) => dispatch(Action.registerSuccess(user as Types.User)))
            .catch(() => dispatch(Action.registerFailed(true)));
    };
}

export function usersFetch() {
    return (dispatch:any) => {
        //dispatch(Action.loginLoading(true));

        fetch('http://localhost:8000/api/users/', {
            mode: 'cors',
            method: 'GET',
        })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            //dispatch(Action.loginLoading(false));

            return response;
        })
        .then((response) => response.json())
        .then((users) => dispatch(Action.loadUsersSuccess(users as Types.User[])))
        .catch(() => console.log("ERROR"));
    };
}