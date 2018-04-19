import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';

import Item from '../Item.container';
import { toggleComplete } from '../Item.actions';

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {};

describe('container <Item />', () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('renders without crashing', () => {
    shallow(<Item />, { context: { store } });
  });

  it('dispatch action on toggle', () => {
    const wrapper = mount(<Item />, { context: { store }});
    wrapper.find('Checkbox').simulate('click');
    expect(store.getActions()).toEqual([toggleComplete(undefined, true)]);
  })
});