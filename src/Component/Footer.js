import React, {Component} from 'react';

class Footer extends Component {
    render(){
        return (
            <div className="bottom main-section">
                <div className="container">
                <div className="main-section__heading">
                    <h2 className="white" style={{color: '#efefef'}}>Stay in touch</h2>
                    <div className="main-section__med-divider" />
                </div>
                <div className="form__wrapper">
                    <form className="clearfix" data-name="Email-form" name="email-form">
                    <input type="email" data-name="Email" maxLength={256} name="email" placeholder="Enter your email" className="form__field w-input" />
                    <input type="submit" className="btn form__submit-button" data-wait="Please wait..." defaultValue="submit" />
                    </form>
                </div>
                </div>
                <div className="footer-section">
                <div className="container">
                    <div className="row">
                    <div className="col lg-4 m-4">
                        <a className="footer-section__logo">
                        <div className="footer-section--long-text">Escape.</div>
                        </a>
                    </div>
                    <div className="col lg-8 m-8">
                        <nav className="footer-section__menu">
                        <a href="/src/index.html" className="footer-section__menu-link">HOME</a>
                        <a href="/src/category.html" className="footer-section__menu-link">CATEGORIES</a>
                        <a href="#" className="footer-section__menu-link">ABOUT</a>
                        <a href="#" className="footer-section__menu-link">CONTACT</a>
                        </nav>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Footer;