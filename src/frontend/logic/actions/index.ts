import {  Action } from 'Config/constants';

export function createAction(type: any, object: any, error: any = {}, 
    status: any): Action {
    return {
        type: type,
        object: object,
        error: error,
        status: status
    }
}