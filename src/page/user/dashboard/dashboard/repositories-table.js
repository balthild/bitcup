// @flow
import * as React from 'react';

import styled from 'styled-components';
import { colors } from '@atlaskit/theme';
import { Skeleton } from '@atlaskit/avatar';
import StarIcon from '@atlaskit/icon/glyph/star-large';

import { grid, url } from '@src/utils';
import { Center } from '@src/components/layout';
import { AvatarCell, Cell, HeadCell, HintRow, Row } from '@src/components/table';
import { Description, SmallText } from '@src/components/text';

const CharacterAvatar = styled(Skeleton)`
    background-color: ${colors.text()};
    font-size: 20px;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
`;

const RepoDescription = styled(Description)`
    margin: 0;
    max-width: ${grid(60)};
`;

type Props = {
    loading: boolean;
    repos: Repo[];
}

function renderTableBody({ loading, repos }: Props) {
    if (loading) {
        return <HintRow>Loading...</HintRow>;
    } else {
        return repos.map((repo: Repo) => (
            <Row key={repo.id}>
                <AvatarCell>
                    <CharacterAvatar>{repo.name[0]}</CharacterAvatar>

                    <div style={{ marginLeft: grid(1.5) }}>
                        <div>
                            <a href={repo.html_url} style={{ color: colors.text() }}>
                                {repo.name}
                            </a>
                        </div>

                        <SmallText>
                            <a href={url(repo.owner.username)} style={{ color: 'inherit' }}>
                                {repo.owner.full_name || repo.owner.username}
                            </a>
                            {' - '}
                            <time dateTime={repo.updated_at}>
                                {repo.updated_at.split('T')[0]}
                            </time>
                        </SmallText>
                    </div>
                </AvatarCell>

                <Cell><RepoDescription>{repo.description}</RepoDescription></Cell>

                <Cell>
                    <Center>
                        <StarIcon size="small" />
                        <span style={{ marginLeft: grid(0.5) }}>{repo.stars_count}</span>
                    </Center>
                </Cell>
            </Row>
        ));
    }
}

export default (props: Props) => (
    <div style={{ padding: `${grid(1)} 0 0` }}>
        <table>
            <thead>
                <Row>
                    <HeadCell>Repository</HeadCell>
                    <HeadCell>Description</HeadCell>
                    <HeadCell>Stars</HeadCell>
                </Row>
            </thead>
            <tbody>
                {renderTableBody(props)}
            </tbody>
        </table>
    </div>
);
