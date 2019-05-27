// @flow
import { gridSize } from '@atlaskit/theme';

export function url(route: string) {
    if (!route.startsWith('/'))
        route = '/' + route;

    return GlobalData.baseUri + route;
}

export function unwrap<T>(val: ?T): T {
    if (val === undefined || val === null)
        throw new Error('You hit the bonus when unwrapping a nullable value!');

    return val;
}

export function grid(n: number, unit: string = 'px') {
    return gridSize() * n + unit;
}

// TODO: i18n
export function tr(key: string) {
    return GlobalData.translations[key];
}
