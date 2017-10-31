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

export function editCollectionShow(collectionSelected: Types.CollectionFull): Types.Action {
    return {
        type: Types.ActionType.EDIT_COLLECTION_SHOW,
        collection: collectionSelected,
    }
}

export function editCollectionHide(): Types.Action {
    return {
        type: Types.ActionType.EDIT_COLLECTION_HIDE,
    }
}

export function editCollectionSuccessful() : Types.Action {
    return {
        type: Types.ActionType.EDIT_COLLECTION_SUCCESSFUL,
    }
}

export function deleteCollectionSuccessful() : Types.Action {
    return {
        type: Types.ActionType.DELETE_COLLECTION_SUCCESSFUL,
    }
}