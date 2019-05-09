// @flow
import * as React from 'react';

import styled from 'styled-components';
import { colors } from '@atlaskit/theme';
import Avatar from '@atlaskit/avatar';

import { grid } from '@src/utils';
import { BorderedRow, Cell, CellWithAvatar, HeadCell, Row } from '@src/components/Table';

const SmallText = styled.small`
    font-weight: normal;
    display: block;
    margin: ${grid(0.25)} 0 0;
`;

const CommitList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const CommitItem = styled.li`
    display: flex;
    align-items: center;
`;

const CommitMessage = styled.small`
    font-weight: normal;
    margin: 0 0 0 ${grid(0.25)};
`;

function renderActivityContent(act: UserActivity) {
    const { content } = act;

    if (content === null) {
        return null;
    } else if (typeof content === 'string') {
        return <SmallText dangerouslySetInnerHTML={{ __html: content }} />;
    } else if (Array.isArray(content)) {
        return (
            <CommitList>
                {content.map((commit: UserActivityCommit) => (
                    <CommitItem>
                        <Avatar src={commit.avatar} size="xsmall" />
                        <CommitMessage>{commit.hash} - {commit.message}</CommitMessage>
                    </CommitItem>
                ))}
            </CommitList>
        );
    } else {
        return (
            <>
                <small>{content.title}</small>
                <SmallText>{content.content}</SmallText>
            </>
        );
    }
}

type Props = {
    activities: UserActivity[];
}

export default (props: Props) => (
    <div style={{ padding: `${grid(1)} 0 0` }}>
        <table>
            <thead>
                <Row>
                    <HeadCell>Activity</HeadCell>
                    <HeadCell>Overview</HeadCell>
                </Row>
            </thead>
            <tbody>
                {props.activities.map((act: UserActivity) => (
                    <BorderedRow key={act.id}>
                        <CellWithAvatar>
                            <Avatar src={act.avatar} label={act.actUser.full_name} />

                            <div style={{ marginLeft: grid(1.5) }}>
                                <div>
                                    <a href={act.actUser.home_link} style={{ color: colors.text() }}>
                                        {act.actUser.full_name}
                                    </a>
                                </div>
                                <SmallText dangerouslySetInnerHTML={{ __html: act.message }} />
                                <SmallText>
                                    <time dateTime={act.time}>
                                        {new Date(act.time).toLocaleString()}
                                    </time>
                                </SmallText>
                            </div>
                        </CellWithAvatar>

                        <Cell style={{ verticalAlign: 'top' }}>
                            <div style={{ padding: `${grid(1)} 0` }}>
                                {renderActivityContent(act)}
                            </div>
                        </Cell>
                    </BorderedRow>
                ))}
            </tbody>
        </table>
    </div>
);
