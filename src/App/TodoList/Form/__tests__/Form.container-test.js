import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { mountWithIntl } from 'shared/intl-enzyme-test-helper';

import Form from '../Form.container';
import { addTodo } from '../Form.actions';
import i18n from '../Form.i18n';

const middlewares = [];
const mockStore = configureStore(middlewares);
const locale = 'en';
const messages = i18n[locale];
const initialState = {};

describe('container <Form />', () => {
  it('renders without crashing', () => {
    const store = mockStore(initialState);
    mountWithIntl(
      <Provider store={store}><Form /></Provider>,
      locale,
      messages,
    );
  });

  describe('updates value state', () => {
    const value = 'todo';
    let wrapper;
    let input;
    let button;
    let store;

    beforeEach(() => {
      store = mockStore(initialState);
      wrapper = mountWithIntl(
        <Provider store={store}><Form /></Provider>,
        locale,
        messages,
      );
      input = wrapper.find('input');
      input.instance().value = value;
      button = wrapper.find('button');
    });

    it('on input change', () => {
      input.simulate('change');
      input = wrapper.find('input');
      expect(input.props().value).toEqual(value);
    });

    it('to empty string on button click', () => {
      button.simulate('click');
      input = wrapper.find('input');
      expect(input.props().value).toEqual('');
    });

    it('with non empty string and dispatch action', () => {
      input.simulate('change');
      button.simulate('click');
      expect(store.getActions()).toEqual([addTodo(value)]);
    });
  });
});
