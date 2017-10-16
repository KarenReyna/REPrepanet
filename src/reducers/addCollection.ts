import * as Types from '../constants';
export function addCollection(state = {open: false, newCollection: null}, action: Types.Action) {
  switch (action.type) {
    case Types.ActionType.ADDCOLLECTION_OPEN:
      return {
        ...state,
        open: true
      }
    case Types.ActionType.ADDCOLLECTION_CLOSE:
      return {
        ...state,
        open: false
      }
    case Types.ActionType.ADDCOLLECTION_SUCCESS:
      return {
        ...state,
        open: false,
        newCollection: action.collection
      }
    default:
      return state
  }
}