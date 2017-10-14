import * as React from 'react';

import Button from '../elements/Button';
import RightContent from '../elements/RightContent'
import Lista from '../elements/Lista';

const usuarios = [
  {
    key: 1,
    title: 'Diego Adolfo José Villa',
    subtitle: 'Administración | Colaboración',
  },
  {
    key: 2, 
    title: 'Diego Orlando Navarro Arizpe',
    subtitle: 'Colaboración',
  },
  {
    key: 3, 
    title: 'Diego Orlando Navarro Arizpe',
    subtitle: 'Colaboración',
  },
  {
    key: 4, 
    title: 'Diego Orlando Navarro Arizpe',
    subtitle: 'Colaboración',
  },
  {
    key: 5, 
    title: 'Diego Orlando Navarro Arizpe',
    subtitle: 'Colaboración',
  },
];

export default class Administracion extends React.Component<any, any> {
  public render() {
      return(
        <RightContent>
          <h2>Administración</h2>
          <Button label="Registrar usuario" onClick={this.props.registerClicked} />
          <br />
          <Lista>
              {usuarios.map((usuario) => (
                  <li key={usuario.key}>
                  <p>{usuario.title}</p>
              </li>
              ))}
          </Lista>
        </RightContent>
        
      );
  }
}