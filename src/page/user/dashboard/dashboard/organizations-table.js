// @flow
import * as React from 'react';

import styled from 'styled-components';
import { colors } from '@atlaskit/theme';
import Avatar from '@atlaskit/avatar';
import ReposIcon from '@atlaskit/icon/glyph/bitbucket/repos';

import { grid } from '@src/utils';
import { Center } from '@src/components/layout';
import { AvatarCell, Cell, HeadCell, Row } from '@src/components/table';
import { Description, SmallText } from '@src/components/text';

const OrgAvatarWrapper = styled.div`
    align-self: center;
`;

const OrgDescription = styled(Description)`
    margin: 0;
    max-width: ${grid(60)};
`;

type Props = {
    organizations: UserOrganization[];
}

export default (props: Props) => (
    <div style={{ padding: `${grid(1)} 0 0` }}>
        <table>
            <thead>
                <Row>
                    <HeadCell>Organization</HeadCell>
                    <HeadCell>Description</HeadCell>
                    <HeadCell>Repositories</HeadCell>
                </Row>
            </thead>

            <tbody>
                {props.organizations.map((org: UserOrganization) => (
                    <Row key={org.id}>
                        <AvatarCell>
                            <OrgAvatarWrapper>
                                <Avatar src={org.avatar_url} />
                            </OrgAvatarWrapper>

                            <div style={{ marginLeft: grid(1.5) }}>
                                <div>
                                    <a href={org.home_link} style={{ color: colors.text() }}>
                                        {org.full_name || org.name}
                                    </a>
                                </div>

                                <SmallText>
                                    <a href={org.website} target="_blank" style={{ color: 'inherit' }}>
                                        {org.website}
                                    </a>
                                </SmallText>
                            </div>
                        </AvatarCell>

                        <Cell>
                            <OrgDescription>{org.description}</OrgDescription>
                        </Cell>

                        <Cell>
                            <Center>
                                <ReposIcon size="small" />
                                <span style={{ marginLeft: grid(0.5) }}>{org.num_repos}</span>
                            </Center>
                        </Cell>
                    </Row>
                ))}
            </tbody>
        </table>
    </div>
);
