// @flow
import * as React from 'react';

import styled from 'styled-components';
import { colors } from '@atlaskit/theme';
import { AkGlobalItem } from '@atlaskit/navigation';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import Avatar from '@atlaskit/avatar';

import { tr, url } from '@src/utils';

const Separator = styled.div`
    border-bottom: 1px solid ${colors.N30}
`;

export default () => (
    <DropdownMenu
        position="right bottom"
        trigger={(
            <AkGlobalItem>
                <Avatar size="small" src={GlobalData.authUser.avatar_url} />
            </AkGlobalItem>
        )}>
        <DropdownItemGroup title={`${tr('signed_in_as')} ${GlobalData.authUser.username}`}>
            <DropdownItem href={url(GlobalData.authUser.username)}>
                {tr('your_profile')}
            </DropdownItem>
            <DropdownItem href={url(`${GlobalData.authUser.username}?tab=stars`)}>
                {tr('your_starred')}
            </DropdownItem>
            <DropdownItem href={url('/user/settings')}>
                {tr('your_settings')}
            </DropdownItem>
        </DropdownItemGroup>

        {GlobalData.isAdmin && (
            <DropdownItem href={url('/admin')}>{tr('admin_panel')}</DropdownItem>
        )}

        <Separator />

        <DropdownItemGroup>
            <DropdownItem href={url('/logout')}>{tr('sign_out')}</DropdownItem>
        </DropdownItemGroup>
    </DropdownMenu>
);
