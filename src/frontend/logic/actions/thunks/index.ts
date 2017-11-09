import { serverUrl, fetchHeader } from 'Config/constants';
import * as categories from './categories';
import * as resources from './resources';
import * as users from './users';
import * as tags from './tags';

export var thunks = {
    resources: resources,
    categories: categories,
    users: users,
    tags: tags
}

function evaluate(response: any): Promise<any> {
    if (!response.ok) {
        throw response;
    }
    else
        return response.json();
}

export function post(object: any, route: string) {
    return fetch(
        serverUrl + route, {
        method: 'POST',
        headers: fetchHeader,
        body: JSON.stringify({
            ...object
        })
    }).then(response => { return evaluate(response) })
}

export function get(route: string) {
    return fetch(
        serverUrl + route, {
        method: 'GET',
        headers: fetchHeader
    }).then(response => { return evaluate(response) })
}

export function del(route: string) {
    return fetch(
        serverUrl + route, {
        method: 'DELETE',
        headers: fetchHeader
    }).then(response => { return evaluate(response) })
}