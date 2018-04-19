import React from 'react';
import { shallow } from 'enzyme';

import App from '../App.component';

describe('component <App /> renders without crashing', () => {
  it('renders with location state', () => {
    shallow(<App location={{ state: {} }} />);
  });

  it('renders without location state', () => {
    shallow(<App location={{}} />);
  });
});