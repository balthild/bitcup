// @flow
import * as React from 'react';

import UserDashboard from '../../layouts/UserDashboard';

function getDefaultSelectedNavItem() {
    const hash = location.hash.substr(1);

    if (hash in ['act', 'repo', 'org'])
        return hash;

    return 'act';
}

const ActivitiesPage = () => (
    <div>Activities</div>
);

const RepositoriesPage = () => (
    <div>TODO: repo</div>
);

const OrganizationsPage = () => (
    <div>TODO: org</div>
);

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
