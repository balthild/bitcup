// @flow
import * as React from 'react';

import { grid } from '@src/utils';
import UserDashboard from '@src/layouts/user-dashboard';
import ActivitiesPage from './activities-page';
import RepositoriesPage from './repositories-page';
import OrganizationsPage from './organizations-page';

function getDefaultSelectedNavItem() {
    const hash = location.hash.substr(1);

    if (['act', 'repo', 'org'].includes(hash))
        return hash;

    return 'act';
}

type Props = {
    activities: UserActivity[],
    organizations: UserOrganization[],
}

type State = {
    currentPage: string;
}

export default class Dashboard extends React.Component<Props, State> {
    state = {
        currentPage: getDefaultSelectedNavItem(),
    };

    onNavItemSelected = (selected: string) => {
        this.setState({
            currentPage: selected,
        });
    };

    renderPage() {
        if (this.state.currentPage === 'org') {
            return <OrganizationsPage organizations={this.props.organizations} />;
        } else if (this.state.currentPage === 'repo') {
            return <RepositoriesPage />;
        } else {
            return <ActivitiesPage activities={this.props.activities} />;
        }
    }

    render() {
        return (
            <UserDashboard
                defaultSelectedNavItem={getDefaultSelectedNavItem()}
                onNavItemSelected={this.onNavItemSelected}>
                <div style={{ paddingBottom: grid(4) }}>
                    {this.renderPage()}
                </div>
            </UserDashboard>
        );
    }
}
