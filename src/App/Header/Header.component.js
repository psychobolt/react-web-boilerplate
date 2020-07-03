import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Flex, FormLabel, Switch, useColorMode } from '@chakra-ui/core';

const darkMode = 'dark';

export default () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === darkMode;
  return (
    <Flex p="5px" justifyContent="flex-end">
      <FormLabel htmlFor="color-mode">
        <FormattedMessage id={isDarkMode ? 'toggleLight' : 'toggleDark'} />
      </FormLabel>
      <Switch
        id="color-mode"
        onChange={toggleColorMode}
        isChecked={isDarkMode}
      />
    </Flex>
  );
};
