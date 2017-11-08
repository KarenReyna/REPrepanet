import { Category, CategoryActions, Status } from 'Config/constants';
import { createAction } from 'Logic/actions';
import { post, get, del } from 'Logic/actions/thunks';

export function update(category: Category) {
    return (dispatch: any) => {
        dispatch(createAction(CategoryActions.Update, null, 
            null, Status.WaitingOnServer));
        post(category, 'api/categories/update/')
            .then(response => dispatch(
                createAction(CategoryActions.Update, response.category as Category, 
                    null, Status.Ready)))
            .catch((error) => dispatch(
                createAction(CategoryActions.Update, null, error, 
                    Status.Failed)));
    };
}

// export function create(categoryAttempt: Category) {
//     return (dispatch: any) => {
//         dispatch(createAction(CategoryActions.New, null, 
//             null, Status.WaitingOnServer));
//         post(categoryAttempt, 'api/categories/new/')
//             .then(category => dispatch(
//                 createAction(CategoryActions.New, category as Category, 
//                     null, Status.Ready)))
//             .catch((error) => dispatch(
//                 createAction(CategoryActions.New, null, error, 
//                     Status.Failed)));
//     };
// }

export function all() {
    return (dispatch:any) => {
        dispatch(createAction(CategoryActions.All, null, 
            null, Status.WaitingOnServer));
        get('api/categories/')
            .then((response) => dispatch(
                createAction(CategoryActions.All, response.categories as Category[], 
                    null, Status.Ready)))
            .catch((error) => dispatch(
                createAction(CategoryActions.All, null, error, 
                    Status.Failed)));
    };
}

// export function edit(category: Category) {
//     return (dispatch: any) => {
//         dispatch(createAction(CategoryActions.Edit, null, 
//             null, Status.WaitingOnServer));
//         post(category, 'api/categories/' + category._id +'/edit')
//             .then(category => dispatch(
//                 createAction(CategoryActions.Edit, category as Category, 
//                     null, Status.Ready)))
//             .catch((error) => dispatch(
//                 createAction(CategoryActions.Edit, null, error, 
//                     Status.Failed)));
//     };
// }

export function remove(categoryId: string) {
    return (dispatch:any) => {
        dispatch(createAction(CategoryActions.Remove, null, 
            null, Status.WaitingOnServer));
        del('api/categories/' + categoryId)
            .then(() => dispatch(
                createAction(CategoryActions.Remove, null, null, 
                    Status.Ready)))
            .catch((error) => dispatch(
                createAction(CategoryActions.Remove, null, error, 
                    Status.Failed)));
    };
}