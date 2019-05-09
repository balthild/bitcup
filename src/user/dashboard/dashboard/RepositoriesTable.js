// @flow
import * as React from 'react';

import styled from 'styled-components';
import { colors } from '@atlaskit/theme';
import { Skeleton } from '@atlaskit/avatar';
import StarIcon from '@atlaskit/icon/glyph/star-large';

import { Centerize, grid, url } from '@src/utils';

const Row = styled.tr`
    :first-child { padding-left: 0; }
    :last-child { padding-right: 0; }
`;

const HeadCell = styled.th`
    padding: ${grid(0.5)} ${grid(1)};
    color: ${colors.N300};
`;

const Cell = styled.td`
    padding: ${grid(0.5)} ${grid(1)};
`;

type Props = {
    repos: Repo[];
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
                {props.repos.map((repo: Repo) => (
                    <Row key={repo.id}>
                        <Cell>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: `${grid(1)} 0`,
                                whiteSpace: 'nowrap',
                            }}>
                                <Skeleton style={{
                                    backgroundColor: colors.text(),
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    textTransform: 'uppercase',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>{repo.name[0]}</Skeleton>

                                <div style={{ marginLeft: grid(1.5) }}>
                                    <div>
                                        <a href={repo.html_url} style={{ color: colors.text() }}>
                                            {repo.name}
                                        </a>
                                    </div>

                                    <small style={{ fontWeight: 'normal' }}>
                                        <a href={url(repo.owner.username)} style={{ color: 'inherit' }}>
                                            {repo.owner.full_name}
                                        </a>
                                        {' - '}
                                        <time dateTime={repo.updated_at}>
                                            {repo.updated_at.split('T')[0]}
                                        </time>
                                    </small>
                                </div>
                            </div>
                        </Cell>

                        <Cell>
                            <small style={{
                                fontWeight: 'normal',
                                display: 'block',
                                maxWidth: grid(60),
                            }}>{repo.description}</small>
                        </Cell>

                        <Cell>
                            <Centerize>
                                <StarIcon size="small" />
                                <span style={{ marginLeft: grid(0.5) }}>{repo.stars_count}</span>
                            </Centerize>
                        </Cell>
                    </Row>
                ))}
            </tbody>
        </table>
    </div>
);
