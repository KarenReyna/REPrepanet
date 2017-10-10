var React = require('react');
var createReactClass = require('create-react-class');

var Button = createReactClass({
    propTypes: {
        label: React.PropTypes.string.isRequired,
    },
    render() {
        return <p>
                <button className="uk-button uk-button-primary" onClick={this.props.onClick}>{this.props.label}</button>
               </p>
    }
});

export default Button;