// @flow
import * as React from 'react';

import Navigation, { AkCreateDrawer, AkGlobalItem, presetThemes } from '@atlaskit/navigation';
import MediaServicesBlurIcon from '@atlaskit/icon/glyph/media-services/blur';
import CreateIcon from '@atlaskit/icon/glyph/add';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import NotificationIcon from '@atlaskit/icon/glyph/notification';

import { url } from '@src/utils';
import BrandMark from './BrandMark';
import CreationDrawer from './CreationDrawer';
import UserDropdown from './UserDropdown';

type Props = HasChildren & {
    dark: boolean;
    header: React.ComponentType<*>;
}

type State = {
    isDrawerOpened: boolean;
}

export default class MainNavigation extends React.Component<Props, State> {
    static defaultProps = {
        dark: false,
    };

    state = {
        isDrawerOpened: false,
    };

    openDrawer = () => this.setState({ isDrawerOpened: true });
    closeDrawer = () => this.setState({ isDrawerOpened: false });

    render() {
        const logo = <MediaServicesBlurIcon label="Gitea" size="large" />;

        return (
            <Navigation
                isCollapsible={false}
                isResizeable={false}
                globalPrimaryIcon={logo}
                globalPrimaryItemHref={GlobalData.baseUri + '/'}
                globalCreateIcon={<CreateIcon label="Create icon" />}
                onCreateDrawerOpen={this.openDrawer}
                containerTheme={this.props.dark ? presetThemes.global : null}
                drawers={(
                    <AkCreateDrawer
                        backIcon={<ArrowLeftIcon label="Back icon" size="medium" />}
                        header={<BrandMark />}
                        isOpen={this.state.isDrawerOpened}
                        onBackButton={this.closeDrawer}
                        primaryIcon={logo}>
                        <CreationDrawer />
                    </AkCreateDrawer>
                )}
                globalSecondaryActions={[
                    <AkGlobalItem href={url('/notifications')}><NotificationIcon /></AkGlobalItem>,
                    <UserDropdown />,
                ]}
                containerHeaderComponent={this.props.header}>
                {this.props.children}
            </Navigation>
        );
    }
}
