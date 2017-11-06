import { Resource, ResourceActions, Status } from 'Config/constants';
import { createAction } from 'Logic/actions';
import { post, get, del } from 'Logic/actions/thunks';

export function update(resource: Resource) {
    return (dispatch: any) => {
        dispatch(createAction(ResourceActions.Update, null, 
            null, Status.WaitingOnServer));
        post(resource, 'api/resources/update/')
            .then(resource => dispatch(
                createAction(ResourceActions.Update, resource as Resource, 
                    null, Status.Ready)))
            .catch((error) => dispatch(
                createAction(ResourceActions.Update, null, error, 
                    Status.Failed)));
    };
}

// export function create(resource: Resource) {
//     return (dispatch: any) => {
//         dispatch(createAction(ResourceActions.New, null, 
//             null, Status.WaitingOnServer));
//         post(resource, 'api/resources/new/')
//             .then(resource => dispatch(
//                 createAction(ResourceActions.New, resource as Resource, 
//                     null, Status.Ready)))
//             .catch((error) => dispatch(
//                 createAction(ResourceActions.New, null, error, Status.Failed)));
//     };
// }

export function all() {
    return (dispatch:any) => {
        dispatch(createAction(ResourceActions.All, null, 
            null, Status.WaitingOnServer));
        get('api/resources')
            .then((resources) => dispatch(
                createAction(ResourceActions.All, resources as Resource[], 
                    null, Status.Ready)))
            .catch((error) => dispatch(
                createAction(ResourceActions.All, null, error, Status.Failed)));
    };
}

// export function edit(resource: Resource) {
//     return (dispatch: any) => {
//         dispatch(createAction(ResourceActions.Edit, null, 
//             null, Status.WaitingOnServer));
//         post(resource, 'api/resources/' + resource._id + '/edit/')
//             .then(resource => dispatch(
//                 createAction(ResourceActions.Edit, resource as Resource, 
//                     null, Status.Ready)))
//             .catch((error) => dispatch(
//                 createAction(ResourceActions.Edit, null, error, 
//                     Status.Failed)));
//     };
// }

export function remove(resourceId: string) {
    return (dispatch:any) => {
        dispatch(createAction(ResourceActions.Remove, null, 
            null, Status.WaitingOnServer));
        del('api/resources' + resourceId)
            .then(() => dispatch(
                createAction(ResourceActions.Remove, null, null, 
                    Status.Ready)))
            .catch((error) => dispatch(
                createAction(ResourceActions.Remove, null, error, 
                    Status.Failed)));
    };
}
