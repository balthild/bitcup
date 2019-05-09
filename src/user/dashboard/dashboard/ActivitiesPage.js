// @flow
import * as React from 'react';

import ContentLayout from './ContentLayout';
import ActivitiesTable from './ActivitiesTable';

type Props = {
    activities: UserActivity[];
}

export default (props: Props) => (
    <ContentLayout title="Activities">
        <ActivitiesTable activities={props.activities} />
    </ContentLayout>
);
