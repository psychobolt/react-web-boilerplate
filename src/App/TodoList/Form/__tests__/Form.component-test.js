import React from 'react';
import { shallow } from 'enzyme';

import Form from '../Form.component';

it('component <Form /> renders without crashing', () => {
  shallow(<Form />);
});