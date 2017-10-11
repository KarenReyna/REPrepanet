var React = require('react');
var createReactClass = require('create-react-class');

var Lista = createReactClass({
    render() {
        return <ul className="uk-list uk-list-divider">
                {this.props.children}
               </ul>
    }
});

export default Lista;