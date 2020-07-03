// @flow
import * as React from 'react';
import { ListItem, Checkbox, Text } from '@chakra-ui/core';

type Props = {
  text: string,
  completed: boolean,
  onToggle: (event: SyntheticMouseEvent<HTMLLabelElement>) => any,
};

export default ({ text, completed, onToggle }: Props) => (
  <ListItem>
    <Checkbox onChange={onToggle} isChecked={completed}>
      <Text as={completed ? 'del' : 'p'}>{text}</Text>
    </Checkbox>
  </ListItem>
);
