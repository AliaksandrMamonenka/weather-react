import React from 'react';

import './style.less';

class Navigation extends React.Component {
    render() {
        return (
            <ul className="navigation-items">
                <li className="navigation-items_item">
                    <a href="#" className="navigation-items_link">Home1</a>
                </li>
                <li className="navigation-items_item">
                    <a href="#" className="navigation-items_link">Home2</a>
                </li>
                <li className="navigation-items_item">
                    <a href="#" className="navigation-items_link">Home3</a>
                </li>
            </ul>
        );
    };
}

export default Navigation;