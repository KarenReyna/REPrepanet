import * as React from 'react';
import Dialog from 'material-ui/Dialog';

export class Login extends React.Component<any, any> {
  public render() {
    const modalStyle = {
      textAlign: 'center', 
      width: '35%',
      maxWidth: 'none',
    };

    return (
      <Dialog open={this.props.open} modal={true} contentStyle={modalStyle}>
        <div className="uk-modal-body">
          <h2 className="uk-modal-title">REPrepanet</h2>
          <br/>
          <form>
            <div className="uk-margin">
              <input className="uk-input" type="text" placeholder="correo electronico"></input>
            </div>
            <div className="uk-margin">
              <input className="uk-input" type="password" placeholder="contraseña"></input>
            </div>
          </form>
          <p className="uk-text-right"><a href="#">Olvide mi contraseña</a></p>
          <p uk-margin>
            <button className="uk-button uk-button-default" onClick={this.props.loginClose}>Cancelar</button>
            &nbsp;
            <button className="uk-button uk-button-primary" onClick={this.props.loginSubmit}>Entrar</button>
          </p>
        </div>
      </Dialog>
    );
  }
}