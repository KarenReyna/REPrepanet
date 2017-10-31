import * as Types from '../constants';

export function tags(state = [] as string[], action: Types.Action) {
  switch (action.type) {
    case Types.ActionType.LOAD_RESOURCES_SUCCESSFUL:
      var tagList: string[] = [];
      action.resources.map((resource) => {
        tagList = resource.tags? tagList.concat(resource.tags) : tagList;
      });
      console.log(tagList)
      return tagList.filter(function(elem, index) {
        return tagList.indexOf(elem) === index; 
      });

    case Types.ActionType.NEW_RESOURCE_SUCCESSFUL:
      var tagList = state;
      tagList = action.resource.tags? 
        tagList.concat(action.resource.tags) : tagList;
      return tagList.filter(function(elem, index) {
        return tagList.indexOf(elem) === index; 
      });

    default:
      return state
  }
}