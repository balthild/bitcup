// @flow
import * as React from 'react';

import styled from 'styled-components';
import type { AvatarPropTypes } from '@atlaskit/avatar';
import Avatar, { AVATAR_SIZES } from '@atlaskit/avatar';

const CharacterWrapper = styled.div`
    width: ${props => AVATAR_SIZES[props.size || 'medium']}px;
    height: ${props => AVATAR_SIZES[props.size || 'medium']}px;
    border-radius: ${props => (AVATAR_SIZES[props.size || 'medium']) / 2}px;
    background-color: #1676b3;

    font-size: 16px;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    user-select: none;

    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    position: relative;
`;

const LinkComponent = styled.a``;
const ButtonComponent = styled.button``;
const ContainerComponent = styled.div``;

const CharacterAvatarComponent = ({ char, ...props }) => {
    const children = <CharacterWrapper>{char}</CharacterWrapper>;

    if (props.href) {
        return <LinkComponent {...props}>{children}</LinkComponent>;
    } else if (props.onClick) {
        return <ButtonComponent {...props}>{children}</ButtonComponent>;
    } else {
        return <ContainerComponent {...props}>{children}</ContainerComponent>;
    }
};

type CharacterAvatarProps = {
    ...$Shape<AvatarPropTypes>;
    +children: string;
};

export const CharacterAvatar: React.StatelessFunctionalComponent<CharacterAvatarProps> = props => {
    const { children, component: _, ...rest } = props;

    return <Avatar {...rest} component={CharacterAvatarComponent} char={children[0]} />;
};
