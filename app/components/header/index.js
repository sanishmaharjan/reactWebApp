import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

require('./header.css');

// pure component
class Header extends React.PureComponent {
    constructor(props, context){
        super(props, context);
    }

    linkClass = (path) => {
        return this.props.path == path ? 'active' : '';
    };

    render() {
        return <header>
            <nav>
                <ul>
                    <li><Link to='/reactWebApp/app/' className={this.linkClass('/reactWebApp/app/')}>Home</Link></li>
                </ul>
            </nav>
        </header>;
    }
}

Header.contextTypes = {
    store: PropTypes.object
};

export default Header;