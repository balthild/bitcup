// @flow
import * as React from 'react';

import { AkContainerLogo, AkNavigationItem } from '@atlaskit/navigation';
import TrayIcon from '@atlaskit/icon/glyph/tray';
import ReposIcon from '@atlaskit/icon/glyph/bitbucket/repos';
import GroupIcon from '@atlaskit/icon/glyph/people-group';
import PullRequestsIcon from '@atlaskit/icon/glyph/bitbucket/pullrequests';
import IssuesIcon from '@atlaskit/icon/glyph/issues';
import DiscoverIcon from '@atlaskit/icon/glyph/discover';
import Page from '@atlaskit/page';

import MainNavigation from '../components/MainNavigation';
import { url } from '../utils';

const NavHeader: React.ComponentType<*> = () => (
    <AkContainerLogo>
        <div style={{
            width: '100%',
            fontSize: 32,
            lineHeight: 1,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
        }}>{GlobalData.appName}</div>
    </AkContainerLogo>
);

const Nav = () => (
    <MainNavigation dark={true} header={NavHeader}>
        <AkNavigationItem
            icon={<TrayIcon />}
            text={'Activities'}
            isSelected={false} />
        <AkNavigationItem
            icon={<ReposIcon />}
            text={'Repositories'}
            isSelected={false} />
        <AkNavigationItem
            icon={<GroupIcon />}
            text={'Organizations'}
            isSelected={false} />

        <AkNavigationItem
            icon={<IssuesIcon />}
            text={'Issues'}
            isSelected={false}
            href={url('/issues')} />
        <AkNavigationItem
            icon={<PullRequestsIcon />}
            text={'Pull Requests'}
            isSelected={false}
            href={url('/pulls')} />
        <AkNavigationItem
            icon={<DiscoverIcon />}
            text={'Explore'}
            isSelected={false}
            href={url('/explore/repos')} />
    </MainNavigation>
);

export default class UserDashboard extends React.Component<HasChildren> {
    render() {
        return <Page navigation={<Nav />}>{this.props.children}</Page>;
    }
}
