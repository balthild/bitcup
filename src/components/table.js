// @flow
import * as React from 'react';

import styled from 'styled-components';
import { colors } from '@atlaskit/theme';

import { grid } from '@src/utils';

export const Row = styled.tr`
    :first-child { padding-left: 0; }
    :last-child { padding-right: 0; }
`;

export const BorderedRow = styled(Row)`
    > td {
        border-bottom: 1px solid ${colors.N20};
    }
`;

export const HeadCell = styled.th`
    padding: ${grid(0.5)} ${grid(1)};
    color: ${colors.N300};
`;

export const Cell = styled.td`
    padding: ${grid(0.5)} ${grid(1)};
`;

export const TopAlignedCell = styled(Cell)`
    vertical-align: top;
`;

const AvatarCellUnit = styled(TopAlignedCell)`
    width: 50%;
`;

const AvatarCellContainer = styled.div`
    display: flex;
    padding: ${grid(1)} 0;
    white-space: nowrap;
    vertical-align: top;
`;

export const AvatarCell = (props: HasChildren) => (
    <AvatarCellUnit>
        <AvatarCellContainer>
            {props.children}
        </AvatarCellContainer>
    </AvatarCellUnit>
);

const HintCell = styled(Cell)`
    text-align: center;
    color: ${colors.placeholderText()};
    font-style: italic;
    padding: ${grid(1.5)} ${grid(1)};
`;

export const HintRow = ({ children }: HasChildren) => (
    <Row><HintCell colSpan="999">{children}</HintCell></Row>
);
