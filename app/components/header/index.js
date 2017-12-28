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
                    <li><Link to='/' replace={this.props.path === '/'} className={this.linkClass('/')}>Home</Link></li>
                    <li><Link to='/article' replace={this.props.path === '/article'} className={this.linkClass('/article')}>Articles</Link></li>
                    <li><Link to='/gitCard' className={this.linkClass('/gitCard')}>Git Cards</Link></li>
                </ul>
            </nav>
        </header>;
    }
}

Header.contextTypes = {
    store: PropTypes.object
};

export default Header;