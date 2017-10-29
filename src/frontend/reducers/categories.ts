import * as Types from '../constants';
export function newCategory(state = {visible: false, category: null, failed: false}, action: Types.Action) {
  switch (action.type) {
    case Types.ActionType.NEW_CATEGORY_SHOW:
      return {
        ...state,
        visible: true,
        category: null
      }
    case Types.ActionType.NEW_CATEGORY_HIDE:
      return {
        ...state,
        visible: false,
        category: null
      }
    case Types.ActionType.NEW_CATEGORY_FAILED:
      return {
        ...state,
        failed: true
      }
    case Types.ActionType.NEW_CATEGORY_SUCCESSFUL:
      return {
        ...state,
        visible: false,
        category: action.category
      }
    default:
      return state
  }
}

export function categories(state = [] as Types.Category[], action: Types.Action) {
  switch (action.type) {
    case Types.ActionType.LOAD_CATEGORIES_SUCCESSFUL:
      return action.categories
    default:
      return state
  }
}