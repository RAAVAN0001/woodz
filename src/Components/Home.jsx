import React from 'react';
import { Button } from '@chakra-ui/react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Navbar from './Navbar';
import '../css/Home.css';

const HeroLandingPage = () => {
  const scrollToExplore = () => {
    scroll.scrollTo(document.getElementById('explore').offsetTop, {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <>
      <Navbar />
      <div className="hero-landing">
        {/* Background Image */}
        <div className="hero-background"></div>

        {/* Content */}
        <div className="hero-content">
          <p>Here you get Best</p>
          <h1>Woodwork</h1>
          <ScrollLink to="explore" spy={true} smooth={true} duration={500} offset={-50} className="explore-link">
            <Button alignItems={'center'} bg={'teal'} type="submit" onClick={scrollToExplore}>
              Explore
            </Button>
          </ScrollLink>
        </div>

        {/* Example element with the id "explore" */}
        <div id="explore" style={{ height: '500px', background: 'lightgray' }}>
          Scroll to Explore!
        </div>
      </div>
    </>
  );
};

export default HeroLandingPage;
