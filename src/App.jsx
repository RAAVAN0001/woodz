// index.js or App.js
import React from 'react';
import Home from './Components/Home';
import Service from './Components/Service';
import Contact from './Components/Conatct';
import Gallery from './Components/gallery';
import Testimonial from './Components/Testimonial';
import './app.css'

const App = () => {
  return (
    <>
      <Home />
      <Service />
      <Gallery/>
      <Testimonial/>
      <Contact/>
    </>
  );
}

export default App;
