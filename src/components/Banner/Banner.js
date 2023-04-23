import React from 'react';
import "./Banner.css"
import BackgoundImgHome from '../../assets/img_banner_home.png';

const Banner = ({ backgroundImage = BackgoundImgHome, showTitle = true, bannerPage = "home" }) => {
    return (
        <div className={`container_banner ${bannerPage}_banner`}>
            <div className='img_banner' style={{ backgroundImage: `url(${backgroundImage})`}}>
                <div className='dark_background'></div>
                {showTitle && <h1>Chez vous, partout et ailleurs</h1>}
            </div>
        </div>
    );
};


export default Banner;
