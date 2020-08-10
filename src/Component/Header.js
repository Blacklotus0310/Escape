import React, {Component} from 'react';

class Header extends Component {
    render(){
        return (
            <div className="navbar">
                <div className="container">
                <a href="#" className="logo nav-brand">
                    <div className="logo--long-text">Escape.</div>
                </a>
                <nav className="navbar__menu">
                    <a href="/src/index.html" className="navbar__menu-link w-nav-menu__link">HOME</a>
                    <a href="/src/category.html" className="navbar__menu-link w-nav-menu__link">CATEGORIES</a>
                    <a href="#" className="navbar__menu-link w-nav-menu__link">ABOUT</a>
                    <a href="#" className="navbar__menu-link w-nav-menu__link">CONTACT</a>
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