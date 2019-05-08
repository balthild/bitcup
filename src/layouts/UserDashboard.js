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

type Props = HasChildren & {
    defaultSelectedNavItem: string;
    onNavItemSelected?: (string) => void;
}

type State = {
    selectedNavItem: string;
}

export default class UserDashboard extends React.Component<Props, State> {
    state = {
        selectedNavItem: this.props.defaultSelectedNavItem,
    };

    onNavItemClicked = (selected: string) => {
        this.setState({ selectedNavItem: selected });

        if (this.props.onNavItemSelected)
            return this.props.onNavItemSelected(selected);
    };

    renderNav() {
        return (
            <MainNavigation dark={true} header={BrandMark}>
                <AkNavigationItem
                    icon={<TrayIcon />}
                    text={'Activities'}
                    isSelected={this.state.selectedNavItem === 'act'}
                    href={url('/#act')}
                    onClick={() => this.onNavItemClicked('act')} />
                <AkNavigationItem
                    icon={<ReposIcon />}
                    text={'Repositories'}
                    isSelected={this.state.selectedNavItem === 'repo'}
                    href={url('/#repo')}
                    onClick={() => this.onNavItemClicked('repo')} />
                <AkNavigationItem
                    icon={<GroupIcon />}
                    text={'Organizations'}
                    isSelected={this.state.selectedNavItem === 'org'}
                    href={url('/#org')}
                    onClick={() => this.onNavItemClicked('org')} />

                <AkNavigationItem
                    icon={<IssuesIcon />}
                    text={'Issues'}
                    isSelected={this.state.selectedNavItem === 'iss'}
                    href={url('/issues')} />
                <AkNavigationItem
                    icon={<PullRequestsIcon />}
                    text={'Pull Requests'}
                    isSelected={this.state.selectedNavItem === 'pr'}
                    href={url('/pulls')} />
                <AkNavigationItem
                    icon={<DiscoverIcon />}
                    text={'Explore'}
                    isSelected={this.state.selectedNavItem === 'exp'}
                    href={url('/explore/repos')} />
            </MainNavigation>
        );
    }

    render() {
        return <Page navigation={this.renderNav()}>{this.props.children}</Page>;
    }
}
