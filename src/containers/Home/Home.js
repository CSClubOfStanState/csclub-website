import React from 'react';
import ControlledCarousel from '../../components/ControlledCarousel/ControlledCarousel';

import '../../styles/Home.scss';

const Home = () => (
  <div className="home">
    <div className="home-slideshow">
      <ControlledCarousel interval={10000} />
    </div>
  </div>
);

export default Home;
