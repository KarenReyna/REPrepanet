var React = require('react');
var createReactClass = require('create-react-class');

const navbarStyle = {
    className: "uk-container",
    position: {
        height: '50px',
        marginTop: '10px',
    }
}

const sitenameStyle = {
    className: "uk-logo uk-inline",
    position: {
        marginLeft: '0px',
    }
}

const div = {
    style: {
        borderBottomStyle: 'solid',
        borderBottomWidth: '5px',
        borderBottomColor: '#63BB67', 
    }
}

var Navbar = createReactClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render() {
        return <div style={div.style}>
                <div className={navbarStyle.className} style={navbarStyle.position}>
                    <a className={sitenameStyle.className} href="#" style={sitenameStyle.position}>{this.props.title}</a>
                    {this.props.children}
                </div>
               </div>
    }
});

export default Navbar;