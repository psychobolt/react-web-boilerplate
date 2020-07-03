import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { defaultMemoize } from 'reselect';
import { Container, List } from '@chakra-ui/core';

import Form from './Form';
import Filter, { Filters, Routes } from './Filter';
import Item from './Item';
import { getVisibleTodos } from './TodoList.selectors';

const getPathnameFilter = defaultMemoize(pathname => {
  const route = Object.values(Routes)
    .find(filterRoute => filterRoute.pathname === pathname);
  return route ? route.state.filter : Filters.ALL;
});

export default () => {
  const location = useLocation();
  const activeFilter = location.state
    ? location.state.filter
    : getPathnameFilter(location.pathname);
  const items = useSelector(state => getVisibleTodos(state, activeFilter));
  return (
    <Container>
      <Form />
      <Filter activeFilter={activeFilter} />
      <List pt="5px">
        {items.map(todo => <Item {...todo} key={todo.id} />)}
      </List>
    </Container>
  );
};
