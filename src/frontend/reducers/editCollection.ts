import * as Types from '../constants';

export function editCollection(state = {open: false, collection: null}, action: Types.Action) {
  switch (action.type) {
    case Types.ActionType.EDIT_COLLECTION_SHOW:
      return {
        ...state,
        open: true,
        collection: action.collection,
      }
    case Types.ActionType.EDIT_COLLECTION_HIDE:
      return {
        ...state,
        open: false,
      }
    case Types.ActionType.EDIT_COLLECTION_SUCCESSFUL:
      return {
        ...state,
        open: false,
      }
    case Types.ActionType.DELETE_COLLECTION_SUCCESSFUL:
      return {
        ...state,
        open: false,
      }
    default:
      return state
  }
}