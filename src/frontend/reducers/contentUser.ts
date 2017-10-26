import * as Types from '../constants';
import Administration from '../containers/administration';
import Collections from '../containers/collections';
import Resources from '../containers/resources';

export function contentUser(state = {content: Administration, data: null}, action: Types.Action) {
  switch (action.type) {
    case Types.ActionType.COLLECTIONS_SHOW:
      return {
        ...state,
        content: Collections,
      }
      case Types.ActionType.RESOURCES_SHOW:
      return {
        ...state,
        content: Resources
      }
      case Types.ActionType.ADMINISTRATION_SHOW:
      return {
        ...state,
        content: Administration
      }
      case Types.ActionType.LOAD_COLLECTIONS_SUCCESSFUL:
      return {
        ...state,
        data: action.collections,
      }
    default:
      return state
  }
}