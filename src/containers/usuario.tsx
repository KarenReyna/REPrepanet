import * as React from 'react';
import { connect } from 'react-redux';
import {Usuario} from '../components/usuario';
import { administracionOpen, coleccionesOpen, recursosOpen} from '../actions';

class UsuarioContainer extends React.Component<any, any> {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Usuario 
          administracionClicked = {this.props.administracionOpen}
          coleccionesClicked = {this.props.coleccionesOpen}
          recursosClicked = {this.props.recursosOpen}
          content = {this.props.muestraContenido}
        />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
      //contenido
      muestraContenido: state.contenido.cont,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
      administracionOpen: () => dispatch(administracionOpen()),
      coleccionesOpen: () => dispatch(coleccionesOpen()),
      recursosOpen: () => dispatch(recursosOpen()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (UsuarioContainer)