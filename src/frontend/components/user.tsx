import * as React from 'react';
import Navbar from '../elements/Navbar';
import NavButton from '../elements/NavButton';
import Container from '../elements/Container';
import Content from '../elements/Content';
import Menu from '../elements/Menu';

export default class User extends React.Component<any, any> {
  public render() {
    const RightContent = this.props.content;
    return (
      <div>
        <Navbar title="REPrepanet">
          <NavButton label="Salir"/>
        </Navbar>
        <Container>
          <Content style="leftContent">
            <Menu>
              <li><a href="#" onClick={this.props.administrationClicked}>Administración</a></li>
              <li><a href="#" onClick={this.props.categoriesClicked}>Categorías</a></li>
              <li><a href="#" onClick={this.props.resourcesClicked}>Recursos</a></li>
            </Menu>
          </Content>
          <RightContent />
        </Container>
      </div>
    )
  }
}