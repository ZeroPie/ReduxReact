import React from 'react';
import { Link } from 'react-router';
import PhotoGrid from './PhotoGrid';

const Header = React.createClass({
    fixNav() {
        const nav = document.querySelector('.flex-header');
        const photoGrid = document.querySelector('.photo-grid');
        const topOfNav = nav.offsetTop;
        console.log(topOfNav, window.scrollY);
        if(window.scrollY > topOfNav) {
            photoGrid.style.padding = nav.offsetHeight + 'px';
            document.body.classList.add('fixed-nav');
        } else {
            document.body.classList.remove('fixed-nav');
            photoGrid.style.padding = 0 + 'px';
        }
    },

    componentDidMount() {
        window.addEventListener('scroll', this.fixNav)
    },

    render() {
        return (
            <header className="flex-header">            
                    <Link to="/" className="logo">React Redux</Link>
                <nav className="nav">
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