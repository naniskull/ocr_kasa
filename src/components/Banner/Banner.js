import React from 'react';
import "./Banner.css"
import BackgoundImgHome from '../../assets/img_banner_home.png';

const Banner = () => {
    return (
        <div className='container_banner'>
            <div className='img_banner' style={{ backgroundImage: `url(${BackgoundImgHome})`}}></div>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;



