import React from 'react';

const Intro = () => (
  <section id="intro-container">
    <img src="../public/universe.jpg" alt="Universe" />
    <div id="intro">
      <h1 data-intro="Brendan Mok">
        <span>Brendan Mok</span>
      </h1>
      <div id="sub-intro">
        <h2>
          <span>FRONT END SOFTWARE ENGINEER</span>
        </h2>
      </div>
    </div>
    <a href="#background" id="explore">
      <i className="fa fa-angle-double-down" aria-hidden="true" />
      <div className="overlay">
        <div className="text">EXPLORE</div>
      </div>
    </a>
  </section >
);

export default Intro;
