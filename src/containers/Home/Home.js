import React from 'react';
import ControlledCarousel from '../../components/ControlledCarousel/ControlledCarousel';
import NavBar from '../../components/NavBar/NavBar';
import About from '../About/About';
import '../../styles/Home.scss';

const Home = () => (
  <div className="home">
    <NavBar />
    <div id="home" className="home-slideshow">
      <ControlledCarousel interval={10000} />
    </div>
    <About />
  </div>
);

export default Home;
