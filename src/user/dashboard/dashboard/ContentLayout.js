// @flow
import * as React from 'react';

import { Grid, GridColumn } from '@atlaskit/page';
import PageHeader from '@atlaskit/page-header';

export default (props: { title: string; } & HasChildren) => (
    <Grid layout="fluid" spacing="comfortable">
        <GridColumn>
            <PageHeader>{props.title}</PageHeader>
            {props.children}
        </GridColumn>
    </Grid>
);
