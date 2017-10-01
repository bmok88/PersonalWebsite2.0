import React from 'react';
import { render } from 'react-router-dom';

import Website from './components/Website';
import css from '../public/styles.sass';

const renderWebsite = () => {
  render(
    <Website />,
    document.getElementById('website');
  );
};

renderWebsite();

if (module.hot) {
  module.hot.accept('./components/Website', () => {
    renderWebsite();
  });
}
