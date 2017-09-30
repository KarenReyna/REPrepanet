import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';

const style = {
  height: 400,
};

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 200,
    overflowY: 'auto',
  },
};
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
    img: '/src/assets/quimica.jpg',
    title: 'Divertiester',
    subtitle: 'Química - Juego Web'
  },
  {
    img: '/src/assets/fisica.png',
    title: 'Aminas',
    subtitle: 'Química - Juego iOS'
  },
  {
    img: '/src/assets/fisica.png',
    title: 'Aldehidos',
    subtitle: 'Química - Juego Web'
  },
  {
    img: '/src/assets/fisica.png',
    title: 'Aldehidos',
    subtitle: 'Química - Juego Web'
  }
]

export class Home extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <RaisedButton label = "Login" style={{textAlign: 'right', float: 'right'}} onClick={this.props.loginClicked}/>
        <Card>
          <CardHeader
          />
          <CardMedia
            overlay={<CardTitle title="Recursos Educativos Prepanet" subtitle="Explora diversos materiales educativos y mejora tu forma de aprender." />}
          >
            <img src="/src/assets/home.png" style={style}/>
          </CardMedia>
          <CardTitle title="Colecciones" subtitle="Escoge sobre qué materia quieres consultar." />
          <div style={styles.root}>
            <GridList cellHeight={180} style={styles.gridList}>
              {collectionsData.map((collection) => (
                <GridTile key={collection.img} title={collection.title}>
                  <img src={collection.img} />
                </GridTile>
              ))}
            </GridList>
          </div>

          <CardTitle title="Recursos Populares" subtitle="Recursos preferidos." />
          <div style={styles.root}>
            <GridList cellHeight={180} style={styles.gridList}>
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