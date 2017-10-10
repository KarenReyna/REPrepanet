import * as React from 'react';
import Navbar from '../elements/Navbar';
import NavbarButton from '../elements/NavbarButton';
import Container from '../elements/Container';
import Button from '../elements/button';



export class Usuario extends React.Component<any, any> {
  public render() {
    return (
      <div>
      <Navbar title="REPrepanet">
        <NavbarButton label="Salir"/>
      </Navbar>
      <Container>
        <h2>Administración</h2>
        <Button label="Registrar usuario" onClick={this.props.registerClicked}/>
      </Container>
      </div>
    )
  }
}