// @flow
import * as React from 'react';

import ContentLayout from './content-layout';
import OrganizationsTable from './organizations-table';

type Props = {
    organizations: UserOrganization[];
}

export default (props: Props) => (
    <ContentLayout title="Organizations">
        <OrganizationsTable organizations={props.organizations} />
    </ContentLayout>
);
