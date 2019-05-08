// @flow
import * as React from 'react';

import { AkNavigationItem, AkNavigationItemGroup } from '@atlaskit/navigation';
import ReposIcon from '@atlaskit/icon/glyph/bitbucket/repos';
import GroupIcon from '@atlaskit/icon/glyph/people-group';
import CopyIcon from '@atlaskit/icon/glyph/copy';
import { url } from '../utils';


type ItemProps = {
    url: string;
    text: string;
    label: string;
    icon: React.ComponentType<*>;
}

const Item: React.ComponentType<ItemProps> = props => {
    const { url, text, label, icon: Icon } = props;

    return <AkNavigationItem key={url} href={url} text={text} icon={<Icon label={label} />} />;
};

export default () => (
    <>
        <AkNavigationItemGroup key="Create" title="Create">
            <Item
                url={url('/repo/create')}
                text="Repository"
                label="Create a repository"
                icon={ReposIcon} />
            <Item
                url={url('/repo/create')}
                text="Organization"
                label="Create an organization"
                icon={GroupIcon} />
        </AkNavigationItemGroup>

        <AkNavigationItemGroup key="Import" title="Import">
            <Item
                url={url('/repo/migrate')}
                text="External Repository"
                label="Create a mirror of an external repository"
                icon={CopyIcon} />
        </AkNavigationItemGroup>
    </>
);
