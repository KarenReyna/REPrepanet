import * as Types from '../constants';
import * as LoginAction from './login';
import * as RegisterAction from './register';
import * as UserAction from './user';
import * as CollectionsAction from './collections';
import * as UsersAction from './users';

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

// Collections

export function addCollectionFetch(addCollectionAttempt: Types.Collection) {
    return (dispatch:any) => {
        dispatch(CollectionsAction.addCollectionWaitingOnServer(true));

        const object = {
            name: addCollectionAttempt.name,
            description: addCollectionAttempt.description,
        };

        request(object, 'api/addCollection/')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

            dispatch(CollectionsAction.addCollectionWaitingOnServer(false));

            return response;
        })
        .then((response) => response.json())
        .then((collection) => dispatch(CollectionsAction.addCollectionSuccessful(collection as Types.Collection)))
        .catch(() => console.log("ERROR"));
    };

}

export function getCollections() {
    return (dispatch:any) => {
        fetch(Types.serverUrl + 'api/getCollections/', {
                mode: 'cors',
                method: 'GET',
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
        })
        .then((response) => response.json())
        .then((collections) => dispatch(CollectionsAction.loadCollectionsSuccessful(collections as Types.Collection[])))
        .catch(() => console.log("ERROR"));
    };
}

// Users

export function getUsersFetch() {
    return (dispatch:any) => {
        fetch(Types.serverUrl + 'api/users/', {
                mode: 'cors',
                method: 'GET',
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
            return response;
        })
        .then((response) => response.json())
        .then((users) => dispatch(UsersAction.loadUsersSuccessful(users as Types.User[])))
        .catch(() => console.log("ERROR"));
    };
}