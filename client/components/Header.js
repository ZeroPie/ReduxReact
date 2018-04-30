import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
    render() {
        return (
            <header className="flex-header">
                    <Link to="/" className="logo">React Redux</Link>
                <nav>
                <ul>
                    <Link to="/" className="nav-link"> Home </Link>
                    <Link to="/" className="nav-link"> Login </Link>
                    <Link to="/" className="nav-link"> Warenkorb </Link>
                </ul>
                </nav>

            </header>
        )
    }
})

export default Header;