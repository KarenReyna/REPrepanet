import * as Types from '../constants';

export function newCategoryShow(): Types.Action {
    return {
        type: Types.ActionType.NEW_CATEGORY_SHOW,
    }
}

export function newCategoryHide(): Types.Action {
    return {
        type: Types.ActionType.NEW_CATEGORY_HIDE
    }
}

export function newCategorySuccessful(category: Types.Category) {
    return {
        type: Types.ActionType.NEW_CATEGORY_SUCCESSFUL,
        category: category,
    };
}

export function newCategoryFailed(): Types.Action {
    return {
        type: Types.ActionType.NEW_CATEGORY_FAILED
    };
}

export function loadCategoriesSuccessful(categories: Types.Category[]) {
  return {
    type: Types.ActionType.LOAD_CATEGORIES_SUCCESSFUL,
    categories: categories
  };
}