import * as Types from '../constants';
import * as LoginAction from './login';
import * as RegisterAction from './register';
import * as UserAction from './user';
import * as UsersAction from './users';
import * as CategoryAction from './categories';
import * as ResourceAction from './resources';

function request(object: any, route: string) {
    return fetch(
        Types.serverUrl + route, {
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

// Add new resource
export function addNewResource(resourceAttempt:Types.Resource) {
    return (dispatch:any) => {
        request(resourceAttempt, 'api/addResource')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((resource) => dispatch(ResourceAction.newResourceSuccessful(resource as Types.Resource)))
            .catch(() => dispatch(ResourceAction.newResourceFailed()));
    };
}

// Categories

export function addNewCategory(categoryAttempt: Types.Category) {
    return (dispatch: any) => {
        console.log(JSON.stringify({
            ...categoryAttempt}));
        
        request(categoryAttempt, 'api/addCategory')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
    
                return response;
            })
            .then((response) => response.json())
            .then((category) => dispatch(CategoryAction.newCategorySuccessful(category as Types.Category)))
            .catch(() => dispatch(CategoryAction.newCategoryFailed()));
    };
}

export function getCategories() {
    console.log("thunk called")
    return (dispatch:any) => {
        console.log(Types.serverUrl + 'api/categories');
        fetch(Types.serverUrl + 'api/categories', {
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
        .then((categories) => dispatch(CategoryAction.loadCategoriesSuccessful(categories as Types.Category[])))
        .catch(() => console.log("ERROR"));
    };
}