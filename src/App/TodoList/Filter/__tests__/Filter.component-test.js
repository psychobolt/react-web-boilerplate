import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { mountWithIntl } from 'shared/intl-enzyme-test-helper';

import Filter, { Filters } from '../Filter.component';
import i18n from '../Filter.i18n';

const locale = 'en';
const messages = i18n[locale];

it('component <Filter /> renders without crashing', () => {
  mountWithIntl(
    <MemoryRouter>
      <Filter activeFilter={Filters.ALL} />
    </MemoryRouter>,
    locale,
    messages,
  );
});
