const Styles = {
    colors: {
        green: '#63BB67',
        white: '#F1F1F1',
        blue: '#B2D3EF',
        gray: '#555555'
    },
    // button: {
    //     class: 'uk-button uk-button-primary',
    // },
    // navButton: {
    //     class: 'uk-button uk-button-primary',
    //     style: {
    //         textAlign: 'right',
    //         float: 'right',
    //     }
    // },
    navbar: {
        navbar: {
            class: 'uk-container',
            style: {
                height: '100px',
                marginTop: '10px',
                display: 'flex',
                justifyContent: 'center'
            }
        },
        logo: {
            class: 'uk-logo uk-inline',
            style: {
                marginLeft: '0px',
            }
        },
        container: {
            style: {
                borderBottomStyle: 'solid',
                borderBottomWidth: '5px',
                borderBottomColor: '#63BB67', 
            }
        }
    },
    rightContent: {
        style: {
            width: '80%',
            float: 'right',   
        }
    },
    leftContent: {
        style: {
            width: '20%',
            float: 'left',
        }
    },
    list: {
        class: 'uk-list uk-list-divider',
    },
    collectionCardHead: {
        class: "uk-card uk-card-primary uk-width-1-4@m uk-inline",
        style: {
            marginRight: '25px',
        }
    },
    collectionCardBody: {
        class: "uk-card-body",
    },
    collectionCardText: {
        class: "uk-button uk-button-text",
    },
    resourceCardHead: {
        class: "uk-card uk-card-primary uk-width-1-4@m uk-inline",
        style: {
            marginRight: '25px',
        },
    },
    resourceCardBody: {
        class: "uk-card-body",
    },
    resourceCardText: {
        class: "uk-button uk-button-text",
    },
    menu: {
        container: {
            class: "uk-width-1-2@s uk-width-2-5@m",
        },
        list: {
            class: "uk-nav uk-nav-default",
        },
    },
}

export default Styles;