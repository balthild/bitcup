// @flow
import * as React from 'react';

import UserDashboard from '@src/layouts/UserDashboard';
import ActivitiesPage from './ActivitiesPage';
import RepositoriesPage from './RepositoriesPage';
import OrganizationsPage from './OrganizationsPage';

function getDefaultSelectedNavItem() {
    const hash = location.hash.substr(1);

    if (['act', 'repo', 'org'].includes(hash))
        return hash;

    return 'act';
}


type State = {
    currentPage: string;
}

export default class Dashboard extends React.Component<{}, State> {
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
            return <OrganizationsPage />;
        } else if (this.state.currentPage === 'repo') {
            return <RepositoriesPage />;
        } else {
            return <ActivitiesPage />;
        }
    }

    render() {
        return (
            <UserDashboard
                defaultSelectedNavItem={getDefaultSelectedNavItem()}
                onNavItemSelected={this.onNavItemSelected}>
                {this.renderPage()}
            </UserDashboard>
        );
    }
}
