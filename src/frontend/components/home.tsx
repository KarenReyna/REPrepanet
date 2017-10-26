import * as React from 'react';
import Navbar from '../elements/Navbar';
import Button from '../elements/Button';
import NavButton from '../elements/NavButton';
import Container from '../elements/Container';
import CollectionCard from '../elements/CollectionCard';
import ResourceCard from '../elements/ResourceCard';
import Styles from '../style/elementStyles';

const collectionsList = [
  {
    key: 1,
    title: 'Química',
  },
  {
    key: 2, 
    title: 'Física',
  },
];

const resourcesList = [
  {
    key: 1, 
    title: 'Divertiester',
    subtitle: 'Química - Juego Web'
  },
  {
    key: 2, 
    title: 'Aminas',
    subtitle: 'Química - Juego iOS'
  },
  {
    key: 3, 
    title: 'Aldehidos',
    subtitle: 'Química - Juego Web'
  },
];

export class Home extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <Navbar title="REPrepanet">
          <NavButton label="Entrar" onClick={this.props.loginShow}/>
        </Navbar>

        <Container bgColor={Styles.colors.green}>
          <br />
          <h2 style={{color: Styles.colors.white}}>Recursos Educativos Prepanet</h2>
          <p style={{color: Styles.colors.white}}>Explora diversos materiales educativos y mejora tu forma de aprender.</p>
          <Button label="Explorar"/>
          <br />
        </Container>

        <Container>
          <h3>Colecciones</h3>
          {collectionsList.map((collection) => (
            <CollectionCard key={collection.key} title={collection.title} />
          ))}
        </Container>
        <Container>
          <h3>Recursos populares</h3>
          {resourcesList.map((resource) => (
            <ResourceCard key={resource.key} title={resource.title} subtitle={resource.subtitle}/>
          ))}
        </Container>
      </div>
    );
  }
}