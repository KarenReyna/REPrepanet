import * as Types from '../constants';
import * as Action from './';

export function loginFetch(loginAttempt: Types.LoginAttempt) {
    return (dispatch: any) => {
        dispatch(Action.loginLoading(true));

        fetch('https://mywebsite.com/endpoint/', {
          method: 'GET',
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