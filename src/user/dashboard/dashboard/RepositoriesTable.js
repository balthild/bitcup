// @flow
import * as React from 'react';

import { colors } from '@atlaskit/theme';
import { Skeleton } from '@atlaskit/avatar';
import StarIcon from '@atlaskit/icon/glyph/star-large';

import { Centerize, grid, url } from '@src/utils';
import { Cell, CellWithAvatar, HeadCell, Row } from '@src/components/Table';

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
                        <CellWithAvatar>
                            <Skeleton style={{
                                backgroundColor: colors.text(),
                                fontSize: '20px',
                                fontWeight: 'bold',
                                color: 'white',
                                textTransform: 'uppercase',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center',
                            }}>{repo.name[0]}</Skeleton>

                            <div style={{ marginLeft: grid(1.5) }}>
                                <div>
                                    <a href={repo.html_url} style={{ color: colors.text() }}>
                                        {repo.name}
                                    </a>
                                </div>

                                <small style={{ fontWeight: 'normal' }}>
                                    <a href={url(repo.owner.username)} style={{ color: 'inherit' }}>
                                        {repo.owner.full_name || repo.owner.username}
                                    </a>
                                    {' - '}
                                    <time dateTime={repo.updated_at}>
                                        {repo.updated_at.split('T')[0]}
                                    </time>
                                </small>
                            </div>
                        </CellWithAvatar>

                        <Cell>
                            <small style={{
                                fontWeight: 'normal',
                                display: 'block',
                                margin: 0,
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
