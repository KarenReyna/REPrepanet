import * as React from 'react';
import RightContent from '../elements/RightContent'
import Button from '../elements/Button';

export default class Colecciones extends React.Component<any, any> {
  public render() {
      return(<RightContent>
        <h2>Colecciones</h2>
        <Button label="Registrar usuario" onClick={this.props.registerClicked} />
    </RightContent>);
  }
}