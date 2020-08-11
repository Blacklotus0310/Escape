import React, {Component} from 'react';
import Post from './Post';
import Feature from './Feature'

class Main extends Component {
    render(){
        return (
            <div className="bottom-padding main-section">
                <div className="container">
                <div className="main-section__heading">
                    <h2 className="main-section__title">Featured Posts</h2>
                    <div className="main-section__med-divider" />
                </div>
                <div className="main-section__list">
                    <div className="row clearfix">
                    <Feature
                        label="Photography"
                        title="The Road Ahead"
                        description="The road ahead might be paved - it might not be."
                        image="https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614ee7220fa552c1b077739_photo-1443926818681-717d074a57af.jpg"
                        author="Blacklotus"
                        authorImg="https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/56150864b2f6f50c2d6ceada_128-14.jpg"
                        date="3/28/2020"
                        color="#e6c728"
                    />
                    <Feature
                        label="adventure"
                        title="From Top Down"
                        description="Once a year, go someplace you’ve never been before."
                        image="https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614ee3de8da77e53e25f871_photo-1443304895043-ef30921332c5.jpg"
                        author="Blacklotus"
                        authorImg="https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/56150864b2f6f50c2d6ceada_128-14.jpg"
                        date="3/28/2020"
                        color="#e6c728"
                    />
                    </div>
                </div>
                </div>
                <div className="container">
                <div className="main-section__heading">
                    <h2 className="main-section__title">Most Recent</h2>
                    <div className="main-section__med-divider" />
                </div>
                <div className="main-section__list">
                    <div className="row clearfix">
                    <Post
                        label="nature"
                        title="Still Standing Tall"
                        description="Life begins at the end of your comfort zone."
                        image="https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614edd2c8afe23958010a5a_photo-1433854304641-67729357fe18.jpg"
                        author="Blacklotus"
                        authorImg="https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/56150864b2f6f50c2d6ceada_128-14.jpg"
                        date="3/28/2020"
                        color="#e6c728"
                    />
                    <Post
                        label="photopgraphy"
                        title="Sunny Side Up"
                        description="No place is ever as bad as they tell you it’s going to be."
                        image="https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614ede6c4c3aee63e74aa67_photo-1431329842981-433c8635c2b9.jpg"
                        author="Blacklotus"
                        authorImg="https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/56150864b2f6f50c2d6ceada_128-14.jpg"
                        date="3/28/2020"
                        color="#a872b7"
                    />
                    <Post
                        label="Relaxion"
                        title="Water Falls"
                        description="We travel not to escape life, but for life not to escape us."
                        image="https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614ef38e8da77e53e25f88c_photo-1433155327100-12aac6a14ff1.jpg"
                        author="Blacklotus"
                        authorImg="https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/56150864b2f6f50c2d6ceada_128-14.jpg"
                        date="3/28/2020"
                        color="#4aaec2"
                    />
                    <Post
                        label="Vacation"
                        title="Through the Mist"
                        description="Travel makes you see what a tiny place you occupy in the world."
                        image="https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614ee0bc8afe23958010a5e_photo-1441906363162-903afd0d3d52.jpg"
                        author="Blacklotus"
                        authorImg="https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/56150864b2f6f50c2d6ceada_128-14.jpg"
                        date="3/28/2020"
                        color="#d25f7c"
                    />
                    <Post
                        label="Vacation"
                        title="Awaken Early"
                        description="Not all those who wander are lost."
                        image="https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614ee1d1656d72e1bb1ad7c_photo-1442347504183-965bd14449ac.jpg"
                        author="Blacklotus"
                        authorImg="https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/56150864b2f6f50c2d6ceada_128-14.jpg"
                        date="3/28/2020"
                        color="#d25f7c"
                    />
                    <Post
                        label="Travel"
                        title="Try it Always"
                        description="The world is a book, and those who do not travel read only one page."
                        image="https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614ef161656d72e1bb1ad9d_photo-1433878455169-4698e60005b1.jpg"
                        author="Blacklotus"
                        authorImg="https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/56150864b2f6f50c2d6ceada_128-14.jpg"
                        date="3/28/2020"
                        color="#49ea5c"
                    />
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Main;