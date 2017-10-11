import * as React from 'react';
import Navbar from '../elements/Navbar';
import NavbarButton from '../elements/NavbarButton';
import Container from '../elements/Container';
import LeftContent from '../elements/LeftContent';

export class Usuario extends React.Component<any, any> {
  public render() {
    const Content = this.props.content;
    return (
      <div>
      <Navbar title="REPrepanet">
        <NavbarButton label="Salir"/>
      </Navbar>
      <Container>
        <LeftContent>
        <div className="uk-width-1-2@s uk-width-2-5@m">
                <ul className="uk-nav uk-nav-default">
                    <li><a href="#" onClick={this.props.administracionClicked}>Administración</a></li>
                    <li><a href="#" onClick={this.props.coleccionesClicked}>Colecciones</a></li>
                    <li><a href="#" onClick={this.props.recursosClicked}>Recursos</a></li>
                </ul>
               </div>
        </LeftContent>
        <Content/>
      </Container>

      </div>
    )
  }
}