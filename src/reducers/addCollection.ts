import * as Types from '../constants';
export function addCollection(state = {open: false}, action: Types.Action) {
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
    default:
      return state
  }
}