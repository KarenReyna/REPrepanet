import * as React from 'react';
//import Styles from 'Presentational/style/elementStyles';
//mport PropTypes from 'prop-types';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
//import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Collapse from 'material-ui/transitions/Collapse';

import { ShareButtons, generateShareIcon} from 'react-share';
// import {
//     ShareButtons,
//     // ShareCounts,
//     // generateShareIcon
//   } from 'react-share';
// import FacebookShareButton from 'react-share';
//import { withStyles } from 'material-ui/styles';


const styles = {
    flexGrow: {
      flex: '1 1 auto',
    },
  };

const {
  FacebookShareButton,
} = ShareButtons;



const FacebookIcon = generateShareIcon('facebook');

export default class ResourceCard extends React.Component<any, any> {
    state = { 
        expanded : false,
    };

    public render() {
        const shareUrl = this.props.resource.url;
        const title = this.props.resource.name;
        var classnames = require('classnames');

        var handleExpandClick = ()=> {
            this.setState({
              expanded: !this.state.expanded
            });
        };
        return(
            <div>
            <Card className="resourceCard">
                <CardContent className={classnames({["resourceCardContent"]: !this.state.expanded,})}>
                    <Typography type="headline" component="h2">
                        {this.props.resource.name}
                    </Typography>
                </CardContent>
                <CardActions disableActionSpacing className={classnames({["resourceCardActions"]: !this.state.expanded,})}>
                    <IconButton aria-label="Share">
                        <FacebookShareButton
                            url={shareUrl}
                            quote={title}
                        >
                        <FacebookIcon
                            size={32}
                            round />
                        </FacebookShareButton>
                    </IconButton>
                    <div style={styles.flexGrow} />
                    <IconButton
                        className={classnames("expand", {
                            ["expandOpen"]: this.state.expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {this.props.resource.description}
                        </Typography>
                        <Typography component="a">
                            <a href={this.props.resource.url}>
                                {this.props.resource.url}
                            </a>
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card> 
            </div>
                  
      );
  }
}