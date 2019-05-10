// @flow
import * as React from 'react';

import ContentLayout from './content-layout';
import ActivitiesTable from './activities-table';

type Props = {
    activities: UserActivity[];
}

export default (props: Props) => (
    <ContentLayout title="Activities">
        <ActivitiesTable activities={props.activities} />
    </ContentLayout>
);
