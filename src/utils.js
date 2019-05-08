// @flow

export function url(route: string) {
    if (!route.startsWith('/'))
        route = '/' + route;

    return GlobalData.baseUri + route;
}

export function unwrap<T>(val: ?T): T {
    if (val === undefined || val === null)
        throw new Error();

    return val;
}

// TODO: i18n
export function __(key: string) {
    return '';
}
