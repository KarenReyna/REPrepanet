import * as Types from '../constants';

export function addCollectionShow(): Types.Action {
    return {
        type: Types.ActionType.ADD_COLLECTION_SHOW,
    }
}

export function addCollectionHide(): Types.Action {
    return {
        type: Types.ActionType.ADD_COLLECTION_HIDE
    }
}

export function addCollectionWaitingOnServer(waiting: boolean) {
    return {
        type: Types.ActionType.ADD_COLLECTION_WAITING_ON_SERVER,
        waiting: waiting
    };
}

export function addCollectionSuccessful(collection: Types.Collection) {
    return {
        type: Types.ActionType.ADD_COLLECTION_SUCCESSFUL,
        collection: collection,
    };
}

export function loadCollectionsSuccessful(collections: Types.Collection[]) {
    return {
        type: Types.ActionType.LOAD_COLLECTIONS_SUCCESSFUL,
        collections: collections, 
    };
}