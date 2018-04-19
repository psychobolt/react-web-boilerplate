import React from 'react';
import { shallow } from 'enzyme';

import Filter, { Filters } from '../Filter.component';

it('component <Filter /> renders without crashing', () => {
  shallow(<Filter activeFilter={Filters.ALL} />);
});