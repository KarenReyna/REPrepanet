import * as React from 'react';

export class Home extends React.Component<any, any> {
  public render() {
    return (
      <div>

        <div className="uk-container" style={{height: '50px', marginTop: '10px'}}>
          <a className="uk-logo uk-inline" href="#" style={{marginLeft: '0px'}}>REPrepanet</a>
          <button className="uk-button uk-button-primary" style={{textAlign: 'right', float: 'right'}} onClick={this.props.loginClicked}>Entrar</button>
        </div>

        <div style={{backgroundColor: '#63BB67'}}>
          <div className="uk-container">
            <br />
            <h2 style={{color: '#fff'}}>Recursos Educativos Prepanet</h2>
            <p style={{color: '#fff'}}>Explora diversos materiales educativos y mejora tu forma de aprender.</p>
            <p uk-margin>
              <button className="uk-button uk-button-primary">Explorar</button>
            </p>
            <br />
          </div>
        </div>

        <div style={{paddingTop: '45px'}}>
          <div className="uk-container">
            <h3>Colecciones</h3>
            <div className="uk-card uk-card-primary uk-width-1-4@m uk-inline" style={{marginRight: '25px'}}>
              <div className="uk-card-body">
                <a href="#" className="uk-button uk-button-text">Química</a>
              </div>
            </div>
            <div className="uk-card uk-card-primary uk-width-1-4@m uk-inline" style={{marginRight: '25px'}}>
              <div className="uk-card-body">
                <a href="#" className="uk-button uk-button-text">Física</a>
              </div>
            </div>
          </div>
        </div>

        <div style={{paddingTop: '45px', paddingBottom: '45px'}}>
          <div className="uk-container">
            <h3>Recursos populares</h3>
            <div className="uk-card uk-card-primary uk-width-1-4@m uk-inline" style={{marginRight: '25px'}}>
              <div className="uk-card-body">
                <a href="#" className="uk-button uk-button-text">Divertiester</a>
                <p>Química - Juego Web</p>
              </div>
            </div>
            <div className="uk-card uk-card-primary uk-width-1-4@m uk-inline" style={{marginRight: '25px'}}>
              <div className="uk-card-body">
                <a href="#" className="uk-button uk-button-text">Aminas</a>
                <p>Química - Juego iOS</p>
              </div>
            </div>
            <div className="uk-card uk-card-primary uk-width-1-4@m uk-inline" style={{marginRight: '25px'}}>
              <div className="uk-card-body">
                <a href="#" className="uk-button uk-button-text">Aldehidos</a>
                <p>Química - Juego Web</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}