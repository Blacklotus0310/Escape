import React, {Component} from 'react';

class Category extends Component {
    render(){
        return (
            <div className="category-section">
                <div className="container">
                    <div className="category-section__list">
                    <div className="category-section__wrapper row clearfix">
                        <div className="category-section__item col lg-2 m-2 sm-4">
                        <a href="#" className="category-section__link">Nature</a>
                        </div>
                        <div className="category-section__item col lg-2 m-2 sm-4">
                        <a href="#" className="category-section__link">Photography</a>
                        </div>
                        <div className="category-section__item col lg-2 m-2 sm-4">
                        <a href="#" className="category-section__link">Relaxion</a>
                        </div>
                        <div className="category-section__item col lg-2 m-2 sm-4">
                        <a href="#" className="category-section__link">Vacation</a>
                        </div>
                        <div className="category-section__item col lg-2 m-2 sm-4">
                        <a href="#" className="category-section__link">Travel</a>
                        </div>
                        <div className="category-section__item col lg-2 m-2 sm-4">
                        <a href="#" className="category-section__link">Advanture</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Category;