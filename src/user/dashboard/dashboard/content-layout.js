// @flow
import * as React from 'react';

import { Grid, GridColumn } from '@atlaskit/page';
import PageHeader from '@atlaskit/page-header';

type Props = HasChildren & {
    title: string;
}

export default (props: Props) => (
    <Grid layout="fluid" spacing="comfortable">
        <GridColumn>
            <PageHeader>{props.title}</PageHeader>
            {props.children}
        </GridColumn>
    </Grid>
);
