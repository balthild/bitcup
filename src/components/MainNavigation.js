// @flow
import * as React from 'react';

import Navigation, { AkCreateDrawer, presetThemes } from '@atlaskit/navigation';
import MediaServicesBlurIcon from '@atlaskit/icon/glyph/media-services/blur';
import CreateIcon from '@atlaskit/icon/glyph/add';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import CreationDrawer from './CreationDrawer';

type Props = HasChildren & {
    dark: boolean;
    header: React.ComponentType<*>;
}

type State = {
    isDrawerOpened: boolean;
    navOpenState: {
        isOpened: boolean;
        width: number;
    };
}

export default class MainNavigation extends React.Component<Props, State> {
    static defaultProps = {
        dark: false,
    };

    state = {
        isDrawerOpened: false,
        navOpenState: {
            isOpened: false,
            width: 100,
        },
    };

    openDrawer = () => this.setState({ isDrawerOpened: true });
    closeDrawer = () => this.setState({ isDrawerOpened: false });

    render() {
        const logo = <MediaServicesBlurIcon label="Gitea" size="large" />;

        return (
            <Navigation
                globalPrimaryIcon={logo}
                globalPrimaryItemHref={GlobalData.baseUri + '/'}
                globalCreateIcon={<CreateIcon label="Create icon" />}
                onCreateDrawerOpen={this.openDrawer}
                containerTheme={this.props.dark ? presetThemes.global : null}
                drawers={(
                    <AkCreateDrawer
                        backIcon={<ArrowLeftIcon label="Back icon" size="medium" />}
                        isOpen={this.state.isDrawerOpened}
                        onBackButton={this.closeDrawer}
                        primaryIcon={logo}>
                        <CreationDrawer />
                    </AkCreateDrawer>
                )}
                containerHeaderComponent={this.props.header}>
                {this.props.children}
            </Navigation>
        );
    }
}
