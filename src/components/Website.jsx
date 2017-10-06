import React from 'react';

import NavBar from './NavBar';
import Intro from './Intro';
import Background from './Background';
import Interests from './Interests';
import Skills from './Skills';
import Timeline from './Timeline';
import Portfolio from './Porfolio';
import Contact from './Contact';

const Website = () => (
  <div>
    <Intro />
    <Background />
    <Interests />
    <Skills />
    <Timeline />
    <Portfolio />
    <Contact />
  </div>
);

export default Website;
