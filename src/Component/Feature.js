import React from 'react';

function Feature ({label, image, title, description, authorName, authorImg, date, color}) {
    return(
        <div className="feature__thumbnail col lg-6 m-6 sm-12">
            <a className="feature__wrapper">
                <div className="feature__item">
                    <div className="feature__category-tag-2" style={{backgroundColor: '#dd783f'}}>{label}</div>
                    <img className="feature__image" src={image} />
                </div>
                <div className="feature__text">
                    <div className="feature__title">{title}</div>
                    <div className="feature__description">{description}</div>
                    <div className="feature__detail">
                    <img src={authorImg} className="feature__author-img" />
                    <span className="feature__author-name">{authorName}</span>
                    <span className="feature__thumbnail-date">{date}</span>
                    </div>
                </div>
            </a>
        </div>
    )
}
export default Feature;