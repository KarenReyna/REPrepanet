var React = require('react');
var createReactClass = require('create-react-class');

var ResourceCard = createReactClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        subtitle: React.PropTypes.string.isRequired,
    },
    render() {
        return <div className="uk-card uk-card-primary uk-width-1-4@m uk-inline" style={{marginRight: '25px'}}>
                <div className="uk-card-body">
                    <a href="#" className="uk-button uk-button-text">{this.props.title}</a>
                    <p>{this.props.subtitle}</p>
                </div>
               </div>
    }
});

export default ResourceCard;