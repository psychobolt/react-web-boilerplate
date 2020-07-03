import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

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
    mount(<Provider store={store}><Item /></Provider>);
  });

  it('dispatch action on toggle', () => {
    const wrapper = mount(<Provider store={store}><Item /></Provider>);
    wrapper.find('input').simulate('change');
    expect(store.getActions()).toEqual([toggleComplete(undefined, true)]);
  });
});
