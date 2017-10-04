import React from 'react';

import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Interests from './Interests';
import Skills from './Skills';

const Website = () => (
  <div>
    <header>
      <h1>Brendan Mok</h1>
      <h4>Front End Software Engineer</h4>
      <NavBar />
    </header>
    <AboutMe />
    <Interests />
    <Skills />
  </div>
);

export default Website;
