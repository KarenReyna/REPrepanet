import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

const collectionsData = [
  {
    img: '/src/assets/quimica.jpg',
    title: 'Química'
  },
  {
    img: '/src/assets/fisica.png',
    title: 'Física'
  },
]
const favoriteResourcesData = [
  {
    img: '/src/assets/quimica1.jpg',
    title: 'Divertiester',
    subtitle: 'Química - Juego Web'
  },
  {
    img: '/src/assets/aminas.png',
    title: 'Aminas',
    subtitle: 'Química - Juego iOS'
  },
  {
    img: '/src/assets/fisica.png',
    title: 'Aldehidos',
    subtitle: 'Química - Juego Web'
  },
  {
    img: '/src/assets/kimitrivia.jpg',
    title: 'KimiTrivia',
    subtitle: 'Química - Juego iOS'
  }
]

export class Home extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <RaisedButton label = "Login" style={{textAlign: 'right', float: 'right'}} onClick={this.props.loginClicked}/>
        <RaisedButton label = "Registro" style={{textAlign: 'right', float: 'right'}} onClick={this.props.registerClicked}/>
        <RaisedButton label = "Create Item" style={{textAlign: 'right', float: 'right'}} onClick={this.props.createClicked}/>
        <Card>
          <CardHeader/>
          <CardMedia
            overlay={<CardTitle title="Recursos Educativos Prepanet" subtitle="Explora diversos materiales educativos y mejora tu forma de aprender." />}
          >
            <img src="/src/assets/home.png" 
              className="root"/>
          </CardMedia>
          <CardTitle title="Colecciones" subtitle="Escoge sobre qué materia quieres consultar." />
          <div className="root">
            <GridList cellHeight={180}>
              {collectionsData.map((collection) => (
                <GridTile key={collection.img} title={collection.title} 
                actionIcon={<IconButton onClick={this.props.loginClicked}><img src="/src/assets/pageview.svg"/></IconButton>}>
                  <img src={collection.img} />
                </GridTile>
              ))}
            </GridList>
          </div>

          <CardTitle title="Recursos Populares" subtitle="Recursos preferidos." />
          <div className="root">
            <GridList cols={2.2}>
              {favoriteResourcesData.map((resource) => (
                <GridTile key={resource.img} title={resource.title}subtitle={resource.subtitle}
                >
                  <img src={resource.img} />
                </GridTile>
              ))}
            </GridList>
          </div>
        </Card>
      </div>
    );
  }
}