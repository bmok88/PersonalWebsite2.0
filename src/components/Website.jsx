import React from 'react';

import NavBar from './NavBar';
import Intro from './Intro';
import AboutMe from './AboutMe';
import Interests from './Interests';
import Skills from './Skills';
import Timeline from './Timeline';
import Portfolio from './Porfolio';
import Contact from './Contact';

const Website = () => (
  <div>
    <Intro />
    <AboutMe />
    <Interests />
    <Skills />
    <Timeline />
    <Portfolio />
    <Contact />
  </div>
);

export default Website;
