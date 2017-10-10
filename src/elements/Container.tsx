var React = require('react');
var createReactClass = require('create-react-class');

var Container = createReactClass({
    render() {
        return <div style={{backgroundColor: this.props.bgColor, paddingTop: '30px', paddingBottom: '30px'}}>
                <div className="uk-container">
                {this.props.children}
                </div>
               </div>
    }
});

export default Container;