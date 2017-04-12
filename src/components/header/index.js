import React from 'react';

import './style.less';

class Header extends React.Component {
    render() {
        console.warn('SECOND: render method');
        return (
            <h1 className="header_title"> {this.props.title} </h1>
        );
    };

    componentWillMount(){
        console.warn('FIRST: componentWillMount method');
    }

    componentDidMount(){
        console.warn('THIRD: componentDidMount method');
    }
}

// Parameter type
Header.propTypes = {
    title: React.PropTypes.string
};

// Default value
Header.defaultProps = {
    title: 'Please set title'
};

export default Header;