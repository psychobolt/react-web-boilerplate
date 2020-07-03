// @flow
import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';

import messages from './App.i18n';
import theme from './App.theme';
import Header from './Header';
import TodoList from './TodoList';

const { language } = navigator;
const i18n = messages[language] || messages.en;

export default () => (
  <IntlProvider locale={language} messages={i18n}>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Header />
      <TodoList />
    </ChakraProvider>
  </IntlProvider>
);
