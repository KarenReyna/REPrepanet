import * as React from 'react';

import { Button } from 'material-ui';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import { ShareButtons } from 'react-share';

const {
  FacebookShareButton,
} = ShareButtons;

export default class ResourceCard extends React.Component<any, any> {
    state = { 
        expanded : false,
    };

    public render() {
        return(
                <Grid
                item
                className='animated fadeIn delay'
                style={{'animationDelay': this.props.delay + 's'}}
                key={this.props.resource._id}
                xs={12} sm={4} md={3}>
                    <Card>
                        <CardContent>
                            <Typography type="headline" component="h2">
                                {this.props.resource.name}
                            </Typography>
                            <Typography component="p">
                                {this.props.resource.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <FacebookShareButton
                                url={this.props.resource.url}
                                quote={`Información sobre ${this.props.resource.name}. 
                                        \n Aprende más en LaNube.mx`}>
                                <Button dense color="primary">
                                    COMPARTIR
                                </Button>
                            </FacebookShareButton>
                            <Button
                                dense
                                color="primary"
                                onClick={() => window.open('http://' + this.props.resource.url, '_blank')}>
                                    VER MÁS
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
      );
  }
}