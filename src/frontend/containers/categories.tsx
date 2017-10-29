import * as React from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../actions/thunks';
import Categories from '../components/categories';

class CategoriesContainer extends React.Component<any, any> {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <div>
        <Categories 
          getCategories = {this.props.getCategories}
          dataArray = {this.props.categories}/>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
      categories: state.categories,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
      getCategories: () => dispatch(getCategories()), 
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (CategoriesContainer)