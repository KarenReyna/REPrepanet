import * as Types from '../constants';
import Administration from '../containers/administration';
import Categories from '../containers/categories';
import Resources from '../containers/resources';

export function contentUser(state = {content: Administration, data: null}, action: Types.Action) {
  switch (action.type) {
    case Types.ActionType.CATEGORIES_SHOW:
      return {
        ...state,
        content: Categories
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
    default:
      return state
  }
}