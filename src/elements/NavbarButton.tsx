var React = require('react');
var createReactClass = require('create-react-class');

const buttonStyle = {
    className: "uk-button uk-button-primary",
    rightAlignment: {
        textAlign: 'right',
        float: 'right',
    }
};

var NavbarButton = createReactClass({
    propTypes: {
        label: React.PropTypes.string.isRequired,
    },
    render() {
        return <button className={buttonStyle.className} style={buttonStyle.rightAlignment} onClick={this.props.onClick}>{this.props.label}</button>
    }
});

export default NavbarButton;