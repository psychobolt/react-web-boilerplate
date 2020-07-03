import React from 'react';
import { shallow } from 'enzyme';

import App from '../App.component';

it('component <App /> renders without crashing', () => {
  shallow(<App />);
});
