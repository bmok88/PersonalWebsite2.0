import React from 'react';

const Contact = () => (
  <section>
    <h1>Contact</h1>
    <div>
      <h3>Got a question? Want to collaborate on a project? Shoot me an e-mail!</h3>
      <form encType="text/plain" method="GET" action="mailto:bmok88@gmail.com">
        Subject <br />
        <input type="text" name="subject" /> <br />
        Message <br />
        <input type="text" name="body" />
        <br />
        <input type="submit" name="submit" />
      </form>
    </div>
    <div>
      <h3>Or...hit me up on any of the following social media accounts. I'm always down for a convo.</h3>
      <div id="contact-links">
        <a href="https://www.facebook.com/brendan.mok.5" rel="noreferrer noopener" target="_blank"><img src="../public/facebook.png" alt="Facebook Link" /></a>
        <a href="https://www.instagram.com/mok_5/" rel="noreferrer noopener" target="_blank"><img src="../public/new.png" alt="Instagram Link" /></a>
        <a href="https://www.linkedin.com/in/brendan-mok/" rel="noreferrer noopener" target="_blank"><img src="../public/linkedin.png" alt="LinkedIn Link" /></a>
        <a href="https://www.github.com/bmok88" rel="noreferrer noopener" target="_blank"><img src="../public/github.png" alt="Github Link" /></a>
      </div>
    </div>
  </section >
);

export default Contact;
