import * as React from 'react';
import Navbar from 'Presentational/elements/Navbar';
import Container from 'Presentational/elements/Container';
import CollectionCardV2 from 'Presentational/elements/CollectionCardV2';
import {  Status } from 'Config/constants';
import { LinearProgress } from 'material-ui/Progress';
import TextField from 'material-ui/TextField';
import SearchResult from 'Presentational/elements/SearchResult';

function createContent(object, resources, search) {
  if (resources.all != null && resources.all.length > 0)
  switch (object.status) {
    case Status.Ready:
      if (object && object.all && object.all.length > 0 && resources.all != null && resources.all.length > 0) {
        if (search == '') {
          return object.all.map((category) => (
            <CollectionCardV2 key={object.all._id} title={category.name} resources={resources} />
          ));
        } else {
          return (<SearchResult resources={resources} search={search} />)
        }
      }
      return (<p>No hay categorías</p>);
    case Status.Failed:
      return (<p>No hay conexión a Internet</p>);
    case Status.WaitingOnServer:
    default:
      return (<LinearProgress mode="indeterminate" />);
  }
}

export class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      search: '',
    }
  }

  handleChange(newValue: string | undefined) {
    this.setState({
      search: newValue,
    });
  }

  public render() {
    let categoryContent = createContent(this.props.categories, this.props.resources, this.state.search);

    return (
      <div>
        <Navbar title="REPrepanet"/>

        <Container>
          <TextField
            label="Buscar"
            onChange={(e) =>
              this.handleChange(e.target.value)}
          />
          <br />
          <br />
          {categoryContent}
        </Container>
      </div>
    );
  }
}