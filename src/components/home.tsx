import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const style = {
  height: 400,
};

export class Home extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <RaisedButton label = "Login" style={{textAlign: 'right'}} onClick={this.props.loginClicked}/>
        <Card>
          <CardHeader
          />
          <CardMedia
            overlay={<CardTitle title="Recursos Educativos Prepanet" subtitle="Explora diversos materiales educativos y mejora tu forma de aprender." />}
          >
            <img src="/src/assets/home.png" style={style}/>
          </CardMedia>
          <CardTitle title="Colecciones" subtitle="Escoge sobre qué materia quieres consultar." />
          <CardActions>
            <RaisedButton label="Química" />
            <RaisedButton label="Física" />
          </CardActions>

          <CardTitle title="Recursos Populares" subtitle="Recursos preferidos." />
          <CardActions>
            <RaisedButton label="Química" />
            <RaisedButton label="Física" />
          </CardActions>
        </Card>
      </div>
    );
  }
}