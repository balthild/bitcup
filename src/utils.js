// @flow
import { gridSize } from '@atlaskit/theme';
import styled from 'styled-components';

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

export function grid(n: number, unit: string = 'px') {
    return gridSize() * n + unit;
}

// TODO: i18n
export function tr(key: string) {
    return GlobalData.translations[key];
}

export const FlexRow = styled.div`
    display: flex;
`;

export const Centerize = styled.div`
    display: flex;
    align-items: center;
`;
