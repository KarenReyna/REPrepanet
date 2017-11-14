import * as React from 'react';
//import Styles from 'Presentational/style/elementStyles';
//mport PropTypes from 'prop-types';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Collapse from 'material-ui/transitions/Collapse';
//import { withStyles } from 'material-ui/styles';

const styles = {
    flexGrow: {
      flex: '1 1 auto',
    },
  };

export default class ResourceCard extends React.Component<any, any> {
    state = { 
        expanded : false,
    };

    handleExpandClick = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    public render() {
        var classnames = require('classnames');

        return(
            <Card>
                <CardContent>
                    <Typography type="headline" component="h2">
                        {this.props.resource.title}
                    </Typography>
                </CardContent>
                <CardActions disableActionSpacing>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                    <div style={styles.flexGrow} />
                    <IconButton
                        className={classnames("expand", {
                            ["expandOpen"]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-lable="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {this.props.resource.description}
                        </Typography>
                        <Typography paragraph>
                            {this.props.resource.url}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card> 
                  
      );
  }
}