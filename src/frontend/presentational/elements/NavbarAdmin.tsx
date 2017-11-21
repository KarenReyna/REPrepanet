import * as React from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Styles from 'Presentational/style/elementStyles';

export default class Navbar extends React.Component<any, any> {
    public render() {
        return(
            <div style={{ padding: 20 }}>
                <Grid
                spacing={40}
                container
                direction='row'
                alignItems='center'>
                    <Grid container item xs={12} sm={2} md={2} justify='center'>
                        <a>
                            <img src={'/src/frontend/presentational/assets/logo.svg'}/>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={10} md={10}>
                        <Button 
                            onClick = {this.props.logout}
                            color="primary"
                            style={Styles.logoutButton.style}>
                            Cerrar sesión
                        </Button>
                    </Grid>
                </Grid>
            </div>
      );
  }
}