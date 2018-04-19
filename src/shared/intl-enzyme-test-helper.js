/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * English-locale intl context around them.
 */

import React from 'react';
import { IntlProvider, intlShape } from 'react-intl';
import { mount, shallow } from 'enzyme';

/**
 * When using React-Intl `injectIntl` on components, props.intl is required.
 */
function nodeWithIntlProp(node, intl) {
    return React.cloneElement(node, { intl });
}

export function shallowWithIntl(node, { context, messages, ...additionalOptions } = {}) {
    const intlProvider = new IntlProvider({ locale: 'en', messages }, {});
    const { intl } = intlProvider.getChildContext();
    return shallow(
        nodeWithIntlProp(node, intl),
        {
            context: Object.assign({}, context, {intl}),
            ...additionalOptions,
        }
    );
}

export function mountWithIntl(node, { context, childContextTypes, messages, ...additionalOptions } = {}) {
    const intlProvider = new IntlProvider({ locale: 'en', messages }, {});
    const { intl } = intlProvider.getChildContext();
    return mount(
        nodeWithIntlProp(node, intl),
        {
            context: Object.assign({}, context, {intl}),
            childContextTypes: Object.assign({}, { intl: intlShape }, childContextTypes),
            ...additionalOptions,
        }
    );
}