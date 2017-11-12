import * as React from 'react';
import Navbar from 'Presentational/elements/Navbar';
// import Button from 'Presentational/elements/Button';
import NavButton from 'Presentational/elements/NavButton';
import Container from 'Presentational/elements/Container';
// import CollectionCard from 'Presentational/elements/CollectionCard';
import CollectionCardV2 from 'Presentational/elements/CollectionCardV2';
// import ResourceCard from 'Presentational/elements/ResourceCard';
import Styles from 'Presentational/style/elementStyles';
import { Status } from 'Config/constants';
import { LinearProgress } from 'material-ui/Progress';

// function createContent(object) {
//   switch(object.status) {
//     case Status.Ready:
//       if(object && object.all && object.all.length > 0)
//         return object.all.map((category) => (
//           <CollectionCard key={object.all._id} title={category.title} />
//         ));
//       return (<p>No hay categorías</p>);
//     case Status.Failed:
//       return (<p>No hay conexión a Internet</p>);
//     case Status.WaitingOnServer:
//     default:
//       return (<LinearProgress mode="indeterminate" />);
//   }
// }

function createContentV2(object, resources) {
  if(resources.all != null && resources.all.length > 0)
    console.log(resources.all);
  switch(object.status) {
    case Status.Ready:
      if(object && object.all && object.all.length > 0 && resources.all != null && resources.all.length > 0)
        return object.all.map((category) => (
          <CollectionCardV2 key={object.all._id} title={category.name} resources = {resources}/>
        ));
      return (<p>No hay categorías</p>);
    case Status.Failed:
      return (<p>No hay conexión a Internet</p>);
    case Status.WaitingOnServer:
    default:
      return (<LinearProgress mode="indeterminate" />);
  }
}

export class Home extends React.Component<any, any> {
  public render() {
    let categoryContent = createContentV2(this.props.categories, this.props.resources);
    // let resourceContent = createContent(this.props.resources);
    
    return (
      <div>
        <Navbar title="REPrepanet">
          <NavButton label="Entrar" onClick={this.props.loginShow}/>
        </Navbar>

        <Container bgColor={Styles.colors.green}>
          <br />
          <h2 style={{color: Styles.colors.white}}>Recursos Educativos Prepanet</h2>
          <p style={{color: Styles.colors.white}}>Explora diversos materiales educativos y mejora tu forma de aprender.</p>
          {/* <Button label="Explorar"/> */}
          <br />
        </Container>

        <Container>
          <h3>Categorías</h3>
            {categoryContent}
        </Container>
        {/* <Container>
          <h3>Recursos populares</h3>
            {resourceContent}
        </Container> */}
      </div>
    );
  }
}