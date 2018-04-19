import React from 'react';
import { Container } from 'rebass';

import Form from './Form';
import Filter from './Filter';
import Item from './Item';

export default ({ activeFilter, items }) => {
  return (
    <Container>
      <Form />
      <Filter activeFilter={activeFilter} />
      <Container>
        {items.map(todo => <Item key={todo.id} {...todo} />)}
      </Container>
    </Container>
  );
};
