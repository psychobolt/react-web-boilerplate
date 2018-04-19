import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import { Provider } from 'rebass';

import TodoList, { Filters, messages } from './TodoList';

addLocaleData([ ...en, ...zh ]);

const language = navigator.browserLanguage || navigator.language;
const i18n = messages[language] || messages['en'];

export default ({ location }) => {
  const filter = location.state ? location.state.filter : Filters.ALL;
  return (
    <IntlProvider locale={language} messages={i18n}>
      <Provider><TodoList activeFilter={filter} /></Provider>
    </IntlProvider>
  );
};