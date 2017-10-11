var React = require('react');
var createReactClass = require('create-react-class');

var RightContent = createReactClass({
    render() {
        return <div style={{width: '80%', float: 'right'}}>
                {this.props.children}
               </div>
    }
});

export default RightContent;