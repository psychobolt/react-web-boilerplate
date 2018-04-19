import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Group, Input, Button } from 'rebass';

export default ({ value, onInput, submit }) => (
  <Group>
    <Input onChange={onInput} value={value} />
    <Button onClick={submit}><FormattedMessage id="label_add_todo" /></Button>
  </Group>
);
