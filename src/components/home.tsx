import * as React from 'react';

import Navbar from '../elements/Navbar';
import NavbarButton from '../elements/NavbarButton';
import Container from '../elements/Container';
import Button from '../elements/Button';
import CollectionCard from '../elements/CollectionCard';
import ResourceCard from '../elements/ResourceCard';

const colors = {
  green: '#63BB67',
  white: '#ffffff',
};

const collections = [
  {
    key: 1,
    title: 'Química',
  },
  {
    key: 2, 
    title: 'Física',
  },
];

const popularResources = [
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
          <NavbarButton label="Entrar" onClick={this.props.loginClicked}/>
        </Navbar>
        <Container bgColor={colors.green}>
          <h2 style={{color: colors.white}}>Recursos Educativos Prepanet</h2>
          <p style={{color: colors.white}}>Explora diversos materiales educativos y mejora tu forma de aprender.</p>
          <Button label="Explorar" onClick={this.props.administracionClicked}/>
          <br />
        </Container>

        <Container>
          <h3>Colecciones</h3>
          {collections.map((collection) => (
            <CollectionCard key={collection.key} title={collection.title} />
          ))}
        </Container>

        <Container>
          <h3>Recursos populares</h3>
          {popularResources.map((resource) => (
            <ResourceCard key={resource.key} title={resource.title} subtitle={resource.subtitle}/>
          ))}
        </Container>
      </div>
    );
  }
}