import React from 'react';
import { ChakraProvider } from '@chakra-ui/core';
import theme from '@chakra-ui/theme';

import { mountWithIntl } from 'shared/intl-enzyme-test-helper';

import Header from '../Header.component';
import i18n from '../Header.i18n';

const locale = 'en';
const messages = i18n[locale];

describe('component <Header />', () => {
  it('should render without crashing', () => {
    mountWithIntl(
      <ChakraProvider theme={theme}>
        <Header />
      </ChakraProvider>,
      locale,
      messages,
    );
  });

  it('should render without crashing -- dark mode', () => {
    mountWithIntl(
      <ChakraProvider theme={{
        ...theme,
        config: {
          initialColorMode: 'dark',
        },
      }}
      >
        <Header />
      </ChakraProvider>,
      locale,
      messages,
    );
  });
});
