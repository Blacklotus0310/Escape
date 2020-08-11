import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render(){
        return (
            <div className="navbar">
                <div className="container">
                <Link to="/" className="logo nav-brand">
                    <div className="logo--long-text">Escape.</div>
                </Link>
                <nav className="navbar__menu">
                    <Link to="/" className="navbar__menu-link w-nav-menu__link">Home</Link>
                    <Link to="/categories" className="navbar__menu-link w-nav-menu__link">Categories</Link>
                    <Link to="/about" className="navbar__menu-link w-nav-menu__link">About</Link>
                    <Link to="/contact" className="navbar__menu-link w-nav-menu__link">Contact</Link>
                        <a href="javascript:void(0)" className="w-nav-menu__link-close hide-on-main" onclick="closeNav()">x</a>
                    </nav>
                <div className="menu__button clearfix hide-on-main" onclick="openNav()">
                    <div className="menu__button-icon">
                    <div className="menu__button-icon-1" />
                    <div className="menu__button-icon-1" />
                    <div className="menu__button-icon-1" />
                    </div>
                    <div className="menu__button-link">MENU</div>
                </div>
                <div className="navbar__overlay w-overlay hide-on-main" id="myOverlay">
                    <nav className="w-nav-menu w--nav-menu-open" id="myNav">
                    <a href="/src/index.html" className="navbar__menu-link w-nav-menu__link">HOME</a>
                    <a href="/src/category.html" className="navbar__menu-link w-nav-menu__link">CATEGORIES</a>
                    <a href="#" className="navbar__menu-link w-nav-menu__link">ABOUT</a>
                    <a href="#" className="navbar__menu-link w-nav-menu__link">CONTACT</a>
                    <a href="javascript:void(0)" className="w-nav-menu__link-close hide-on-main" onclick="closeNav()">x</a>
                    </nav>
                </div>
                </div>
            </div>
        )
    }
}
export default Header;