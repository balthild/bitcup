// @flow
import * as React from 'react';

import { AkContainerLogo } from '@atlaskit/navigation';

// TODO: better brand mark
export default () => (
    <AkContainerLogo>
        <div style={{
            width: '100%',
            fontSize: 32,
            lineHeight: 1,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
        }}>{GlobalData.appName}</div>
    </AkContainerLogo>
);
