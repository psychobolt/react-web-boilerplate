import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'rebass';

import * as styles from './Filter.style';

export const Filters = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
};

export const Routes = {
  ALL: { pathname: '/', state: { filter: Filters.ALL } },
  ACTIVE: { pathname: '/active', state: { filter: Filters.ACTIVE } },
  COMPLETED: { pathname: '/completed', state: { filter: Filters.COMPLETED } }
}

const FilterTab = Tab.extend(styles.tab);

export default ({ activeFilter }) => (
  <Tabs>
    {Object.entries(Routes).map(([key, value]) => 
      <FilterTab key={key} to={value} active={activeFilter === Filters[key] ? 'true' : 'false'} is={Link}>
        <FormattedMessage id={key} />
      </FilterTab>)}
  </Tabs>
);