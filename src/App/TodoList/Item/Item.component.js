import React from 'react';
import { Row, Label, Checkbox } from 'rebass';

import * as styles from './Item.style';

const ItemLabel = Label.extend(styles.label);

export default ({ text, completed, onToggle }) => (
  <Row>
    <ItemLabel onClick={onToggle} completed={completed ? 'true' : 'false'}>
      <Checkbox onChange={onToggle} checked={completed} />
      {text}
    </ItemLabel>
  </Row>
);