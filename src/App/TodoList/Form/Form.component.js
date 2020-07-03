// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Flex, Button, Input } from '@chakra-ui/core';

const { useState } = React;
const initialValue = '';

type Props = {
  onSubmit: (value: string) => any
};

export default ({ onSubmit }: Props) => {
  const [value, setValue] = useState(initialValue);
  return (
    <Flex pt="15px">
      <Input onChange={({ target }) => setValue(target.value)} value={value} />
      <Button
        colorScheme="blue"
        onClick={() => {
          onSubmit(value);
          setValue(initialValue);
        }}
      >
        <FormattedMessage id="label_add_todo" />
      </Button>
    </Flex>
  );
};
