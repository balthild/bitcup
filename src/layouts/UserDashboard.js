// @flow
import * as React from 'react';

import { AkNavigationItem } from '@atlaskit/navigation';
import TrayIcon from '@atlaskit/icon/glyph/tray';
import ReposIcon from '@atlaskit/icon/glyph/bitbucket/repos';
import GroupIcon from '@atlaskit/icon/glyph/people-group';
import PullRequestsIcon from '@atlaskit/icon/glyph/bitbucket/pullrequests';
import IssuesIcon from '@atlaskit/icon/glyph/issues';
import DiscoverIcon from '@atlaskit/icon/glyph/discover';
import Page from '@atlaskit/page';

import MainNavigation from '../components/MainNavigation';
import BrandMark from '../components/BrandMark';
import { url } from '../utils';

const Nav = () => (
    <MainNavigation dark={true} header={BrandMark}>
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
