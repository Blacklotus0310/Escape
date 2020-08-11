import React from 'react';

function Post ({label, image, title, description, authorName, authorImg, date, color}) {
    return(
        <div className="blog__thumbnail col lg-4 m-4 sm-12">
            <a className="blog__wrapper">
                <div className="blog__item">
                    <img className="blog__image" src={image}></img>
                    <div className="blog__category-tag" style={{backgroundColor: {color}}}>{label}</div>
                </div>
                <div className="blog__text">
                    <div className="blog__title">{title}</div>
                    <div className="blog__description">{description}</div>
                </div>
                <div className="blog__detail clearfix">
                    <img src={authorImg} className="blog__author-img" />
                    <span className="blog__author-name">{authorName}</span>
                    <span className="blog__thumbnail-date">{date}</span>
                </div>
            </a>
        </div>
    )
}
export default Post;