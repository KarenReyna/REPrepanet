import * as Types from '../constants';

export function administrationShow(): Types.Action {
    return {
        type: Types.ActionType.ADMINISTRATION_SHOW,
    }
}

export function collectionsShow(): Types.Action {
    return {
        type: Types.ActionType.COLLECTIONS_SHOW,
    }
}

export function resourcesShow(): Types.Action {
    return {
        type: Types.ActionType.RESOURCES_SHOW,
    }
}
