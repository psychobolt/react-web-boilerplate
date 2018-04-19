import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import Form from '../Form.container';
import { addTodo } from '../Form.actions';
import i18n from '../Form.i18n';
import { mountWithIntl } from '../../../../shared/intl-enzyme-test-helper';

const middlewares = [];
const mockStore = configureStore(middlewares);
const messages = i18n.en;
const initialState = {};

describe('container <Form />', () => {
  it('renders without crashing', () => {
    shallow(<Form />, { 
      context: { store: mockStore(initialState) },
      messages
    });
  });

  describe('updates value state', () => {  
    const value = 'todo';
    let wrapper, input, store; 

    beforeEach(() => {
      store = mockStore(initialState);
      wrapper = mountWithIntl(<Form />, { context: { store }, messages });
      input = wrapper.find('Input')
      input.find('input').instance().value = value;
    });

    it('on input change', () => {
      input.simulate('change');
      expect(wrapper.childAt(0).childAt(0).props().value).toEqual(value);
    });

    it('to empty string on button click', () => {
      wrapper.find('Button').simulate('click');
      expect(wrapper.childAt(0).childAt(0).props().value).toEqual('');
    });

    it('with non empty string and dispatch action', () => {
      input.simulate('change');
      wrapper.find('Button').simulate('click');
      expect(store.getActions()).toEqual([addTodo(value)]);
    });
  });
});