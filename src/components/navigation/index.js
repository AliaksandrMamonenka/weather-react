import React from 'react';
import {NavLink} from 'react-router-dom';

import './style.less';

class Navigation extends React.Component {
    render() {
        return (
            <ul className="navigation-items">
                <li className="navigation-items_item">
                    <NavLink exact to="/" className="navigation-items_link">Home1</NavLink>
                </li>
                <li className="navigation-items_item">
                    <NavLink to={{pathname:'/cities-list'}} className="navigation-items_link">Home2</NavLink>
                </li>
                {/*<li className="navigation-items_item">*/}
                    {/*<Link to="/cities-list" className="navigation-items_link">Home3</Link>*/}
                {/*</li>*/}
            </ul>
        );
    };
}

export default Navigation;