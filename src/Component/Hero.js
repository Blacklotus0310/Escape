import React, {Component} from 'react';

class Hero extends Component {
    render(){
        return(
            <div className="hero-section">
                <div className="hero-section__content container">
                <div className="hero-section__heading">Let's do it together.</div>
                <div className="hero-section__subheading">We travel the world in search of stories. Come along for the ride.</div>
                <a href="#" className="btn hero-section__button">View Latest Posts</a>
                </div>
            </div>
        )
    }
}
export default Hero;