import * as React from 'react';
import ResourceCard from 'Presentational/elements/ResourceCard';
export default class SearchResult extends React.Component<any, any> {
    public render() {
      return(
        <div>
            {(() => {
                var search = this.props.search;
                var resources = this.props.resources;

                search = search.toLowerCase();
                search = search.replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ú", "u");
      
                var filterByTitle = resources.all.filter((resource) => {
                  resource = resource.name.toLowerCase();
                  resource = resource.replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ú", "u");
                  return resource.indexOf(search.toLowerCase()) !== -1; 
                });
                var filterByCategory = resources.all.filter((resource) => {
                  resource = resource.category.name.toLowerCase();
                  resource = resource.replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ú", "u");
                  return resource.indexOf(search.toLowerCase()) !== -1; 
                });
                var filterByTag = resources.all.filter((resource) => {
                  return resource.tags.indexOf(search.toLowerCase()) !== -1; 
                });
                var filterByType = resources.all.filter((resource) => {
                  resource = resource.type.toLowerCase();
                  resource = resource.replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ú", "u");
                  return resource.indexOf(search.toLowerCase()) !== -1; 
                });
      
                var resourcesFiltered = filterByTitle.concat(filterByCategory).concat(filterByTag).concat(filterByType);
      
                resourcesFiltered = resourcesFiltered.filter((resource, index, self) =>
                  index === self.findIndex((t) => (
                    t.name === resource.name
                  )
                ));
                
                return resourcesFiltered.map((resource2) => (
                   <ResourceCard resource={resource2}/>  
               ))
            })()}           
        </div>
      );

  }
}