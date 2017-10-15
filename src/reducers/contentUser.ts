import * as Types from '../constants';
import Administration from '../containers/administration';
import Collections from '../containers/collections';
import Resources from '../containers/resources';

export function contentUser(state = {content: Administration}, action: Types.Action) {
  switch (action.type) {
    case Types.ActionType.COLLECTIONS_OPEN:
      return {
        ...state,
        content: Collections
      }
      case Types.ActionType.RESOURCES_OPEN:
      return {
        ...state,
        content: Resources
      }
      case Types.ActionType.ADMINISTRATION_OPEN:
      return {
        ...state,
        content: Administration
      }
    default:
      return state
  }
}