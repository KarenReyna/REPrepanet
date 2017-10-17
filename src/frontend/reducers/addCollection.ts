import * as Types from '../constants';

export function addCollection(state = {open: false, newCollection: null}, action: Types.Action) {
  switch (action.type) {
    case Types.ActionType.ADD_COLLECTION_SHOW:
      return {
        ...state,
        open: true
      }
    case Types.ActionType.ADD_COLLECTION_HIDE:
      return {
        ...state,
        open: false
      }
    case Types.ActionType.ADD_COLLECTION_SUCCESSFUL:
      return {
        ...state,
        open: false,
        newCollection: action.collection
      }
    default:
      return state
  }
}