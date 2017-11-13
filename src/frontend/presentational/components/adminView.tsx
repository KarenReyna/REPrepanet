import * as React from 'react';
import Button from 'material-ui/Button';
import Content from 'Presentational/elements/Content';

export class AdminView extends React.Component<any, any> {
  public render() {
      return(
        <Content style="rightContent">
          <Button onClick={this.props.updateCategoryShow}>Añadir Categoría</Button>
      </Content>);
  }
}