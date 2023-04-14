import React from 'react';
import Banner from '../components/Banner/Banner';
import BackgoundImgAbout from '../assets/img_banner_about.png';
import Collapse from '../components/Collapse/Collapse';

const About = () => {
  return (
    <div>
      <Banner backgroundImage={BackgoundImgAbout} showTitle={false} />
      <Collapse />
    </div>
  );
};

export default About;