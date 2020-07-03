import React from 'react';
import { shallow } from 'enzyme';

import Routes from '../routes';

it('component <Routes /> should render without crashing', () => {
  shallow(<Routes />);
});
