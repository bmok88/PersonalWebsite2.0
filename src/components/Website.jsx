import React from 'react';

import NavBar from './NavBar';
import Interests from './Interests';

const Website = () => (
  <div>
    <header>
      <h1>Brendan Mok</h1>
      <h4>Front End Software Engineer</h4>
      <NavBar />
    </header>
    <section>
      <Interests />
    </section>
  </div>
);

export default Website;
