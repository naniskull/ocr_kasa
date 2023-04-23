import React from 'react';
import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card';
import BackgroundImgHome from '../assets/img_banner_home.png';


const Home = () => {
  return (
    <div className='home'>
      <Banner backgroundImage={BackgroundImgHome} bannerPage="home" />
      <Card />
    </div>
  );
};

export default Home;