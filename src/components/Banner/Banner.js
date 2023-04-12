import React from 'react';
import "./Banner.css"
import BackgoundImgHome from '../../assets/img_banner_home.png';

const Banner = () => {
    return (
        <div className='container_banner'>
            <img className='img_banner' src={BackgoundImgHome} alt="montagne en bord de mer"/>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;