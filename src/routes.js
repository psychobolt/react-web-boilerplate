import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';

export default () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Route path="/:filter?" component={App} />
  </Router>
);
