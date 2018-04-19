import React from 'react';
import { shallow } from 'enzyme';

import Item from '../Item.component';

describe('component <Item />', () => {
  it('renders as active', () => {
    shallow(<Item />);
  });
    
  it('renders as completed', () => {
    shallow(<Item completed/>);
  });
});