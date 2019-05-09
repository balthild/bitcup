// @flow
import * as React from 'react';

import styled from 'styled-components';
import { colors } from '@atlaskit/theme';

import { grid } from '@src/utils';

export const Row = styled.tr`
    :first-child { padding-left: 0; }
    :last-child { padding-right: 0; }
`;

export const HeadCell = styled.th`
    padding: ${grid(0.5)} ${grid(1)};
    color: ${colors.N300};
`;

export const Cell = styled.td`
    padding: ${grid(0.5)} ${grid(1)};
`;

export const CellWithAvatar = (props: HasChildren) => (
    <Cell style={{ width: '50%' }}>
        <div style={{
            display: 'flex',
            padding: `${grid(1)} 0`,
            whiteSpace: 'nowrap',
        }}>
            {props.children}
        </div>
    </Cell>
);
