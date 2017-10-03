import React from 'react';
import { render } from 'react-dom';

import Website from './components/Website';
import css from '../public/styles.scss';

const renderWebsite = () => {
  render(<Website />, document.getElementById('website'));
};

renderWebsite();

if (module.hot) {
  module.hot.accept('./components/Website', () => {
    renderWebsite();
  });
}
