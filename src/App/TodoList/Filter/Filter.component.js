// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { defaultMemoize } from 'reselect';
import { Tabs, TabList, Tab } from '@chakra-ui/core';

export const Filters = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
};

export const Routes = {
  ALL: { pathname: '/', state: { filter: Filters.ALL } },
  ACTIVE: { pathname: '/active', state: { filter: Filters.ACTIVE } },
  COMPLETED: { pathname: '/completed', state: { filter: Filters.COMPLETED } },
};

const TabFilters = React.memo(() => (
  <TabList>
    {Object.entries(Routes).map(([key, value]) => (
      <Tab key={key} to={value} as={Link}>
        <FormattedMessage id={key} />
      </Tab>
    ))}
  </TabList>
));

const getSelectedIndex = defaultMemoize(filter => Object.values(Routes)
  .findIndex((route: any) => route.state.filter === filter));

type Props = {
  activeFilter: boolean
};

export default ({ activeFilter }: Props) => (
  <Tabs index={getSelectedIndex(activeFilter)}><TabFilters /></Tabs>
);
