import * as React from 'react';
import { LinearProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';

import ResourceCard from 'Presentational/elements/ResourceCard';
import {  Status } from 'Config/constants';

function createContent(objects, status) {
  if (objects != null && objects.length > 0)
  switch (status) {
    case Status.Ready:
          return objects.map((object, i) => (
              <ResourceCard
                key={object._id}
                resource={object}
                delay={i/10}
              />
          ));
    case Status.Failed:
      return (<p>No hay conexión a Internet</p>);
    case Status.WaitingOnServer:
    default:
      return (<LinearProgress mode="indeterminate" />);
  }
}

export class Home extends React.Component<any, any> {
  public render() {
    let gridContent = createContent(this.props.resources, this.props.status);

    return (
      <div style={{ padding: 20 }}>
          <Grid
            spacing={40}
            container
            direction='row'>
            {gridContent}
          </Grid>
      </div>
    );
  }
}