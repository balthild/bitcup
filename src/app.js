// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import '@atlaskit/css-reset';

import { unwrap } from './utils';

function getComponentModule(template: string) {
    /* global require */
    switch (template) {
        case 'user/dashboard/dashboard': return require('./page/user/dashboard/dashboard');
        case 'user/dashboard/feeds': return require('./page/user/dashboard/dashboard');
        case 'user/dashboard/issues': return require('./page/user/dashboard/dashboard');
        default: return require('./page/error/not-found');
    }
}

function render(template: string, data: mixed) {
    const PageComponent = getComponentModule(template).default;

    ReactDOM.render(
        <PageComponent {...data} />,
        unwrap(document.getElementById('app'))
    );
}

window.render = render;
