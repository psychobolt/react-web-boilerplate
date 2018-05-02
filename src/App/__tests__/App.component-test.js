import React from 'react';
import { shallow } from 'enzyme';

import App from '../App.component';
import { FilterRoutes } from '../TodoList';

describe('component <App /> renders without crashing', () => {
  it('renders with location state', () => {
    shallow(<App location={{ state: {} }} />);
  });

  it('renders with location pathname', () => {
    shallow(<App location={{ pathname: FilterRoutes.ACTIVE.pathname }} />);
  });

  it('renders without location state', () => {
    shallow(<App location={{}} />);
  });
});