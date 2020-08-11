import React, {Component} from 'react';

class Categories extends Component {
    render(){
        return (
            <div className="main-section">
                <div className="container">
                    <div className="row xl-gutter clearfix">
                    <div className="category__wrapper col lg-4 m-4 sm-12">
                        <div className="category__thumbnail">
                        <div className="category__item" style={{backgroundImage: 'url(/assets/img/naturo.jpg)'}}>
                            <div className="category__overlay" />
                            <div className="category__title">Nature</div>
                        </div>
                        </div>
                    </div>
                    <div className="category__wrapper col lg-4 m-4 sm-12">
                        <div className="category__thumbnail">
                        <div className="category__item" style={{backgroundImage: 'url(/assets/img/photography.jpg)'}}>
                            <div className="category__overlay" />
                            <div className="category__title">Photography</div>
                        </div>
                        </div>
                    </div>
                    <div className="category__wrapper col lg-4 m-4 sm-12">
                        <div className="category__thumbnail">
                        <div className="category__item" style={{backgroundImage: 'url(/assets/img/relaxion.jpg)'}}>
                            <div className="category__overlay" />
                            <div className="category__title">Relaxion</div>
                        </div>
                        </div>
                    </div>
                    <div className="category__wrapper col lg-4 m-4 sm-12">
                        <div className="category__thumbnail">
                        <div className="category__item" style={{backgroundImage: 'url(/assets/img/vacation.jpg)'}}>
                            <div className="category__overlay" />
                            <div className="category__title">Vacation</div>
                        </div>
                        </div>
                    </div>
                    <div className="category__wrapper col lg-4 m-4 sm-12">
                        <div className="category__thumbnail">
                        <div className="category__item" style={{backgroundImage: 'url(/assets/img/travel.jpg)'}}>
                            <div className="category__overlay" />
                            <div className="category__title">Travel</div>
                        </div>
                        </div>
                    </div>
                    <div className="category__wrapper col lg-4 m-4 sm-12">
                        <div className="category__thumbnail">
                        <div className="category__item" style={{backgroundImage: 'url(/assets/img/advanter.jpg)'}}>
                            <div className="category__overlay" />
                            <div className="category__title">Advanture</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        )
    }
}
export default Categories;