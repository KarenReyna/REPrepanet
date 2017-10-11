var React = require('react');
var createReactClass = require('create-react-class');

const div = {
    style: {
        width: '20%',
        float: 'left',
    }
}

var LeftContent = createReactClass({
    render() {
        return <div style={div.style}>
                {this.props.children}
               </div>
    }
});

export default LeftContent;