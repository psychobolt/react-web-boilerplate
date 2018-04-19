import React from 'react';
import { shallow } from 'enzyme';

import TodoList from '../TodoList.component';

it('component <TodoList /> renders without crashing', () => {
  shallow(<TodoList items={[{ id: 'todo' }]} />);
});