/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * English-locale intl context around them.
 */

import { IntlProvider } from 'react-intl';
import { mount } from 'enzyme';

const defaultLocale = 'en';

export const mountWithIntl = (node, locale, messages) => mount(node, {
  wrappingComponent: IntlProvider,
  wrappingComponentProps: {
    locale,
    defaultLocale,
    messages,
  },
});
