// @flow
import * as React from 'react';

import styled from 'styled-components';
import { colors } from '@atlaskit/theme';

import { grid } from '@src/utils';

export const SmallText = styled.span`
    color: ${colors.subtleText()};
    font-size: 0.75em;
`;

export const Description = styled(SmallText)`
    display: block;
    margin: ${grid(0.25)} 0 0;
`;
