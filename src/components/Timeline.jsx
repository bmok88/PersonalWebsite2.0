import React from 'react';

const Timeline = () => (
  <section>
    <h1>My Timeline</h1>
    <h2><a href="">View Full Resume</a></h2>
    <div id="timeline-container">
      <div id="timeline" />
      <div className="timeline-block">
        <div className="timeline-content">
          <h3>LeanTaaS</h3>
          <h4>Software Engineer</h4>
          <p>Tbd...</p>
        </div>
      </div>
      <div className="timeline-block">
        <div className="timeline-content">
          <h3>Hack Reactor</h3>
          <h4>Student</h4>
          <p>
            A 12-week full stack software engineering immersive. We learned
            JavaScript, computer science fundamentals, and how to build
            production-grade web applications, mimicking industry standards and
            workflow as close as possible.
          </p>
        </div>
      </div>
      <div className="timeline-block">
        <div className="timeline-content">
          <h3>"Hello, World!"</h3>
        </div>
      </div>
    </div>
  </section>
);

export default Timeline;
