// @flow
import * as React from 'react';

import styled from 'styled-components';
import { colors } from '@atlaskit/theme';
import Avatar from '@atlaskit/avatar';

import { grid } from '@src/utils';
import { AvatarCell, BorderedRow, HeadCell, Row, TopAlignedCell } from '@src/components/table';
import { Description, SmallText } from '@src/components/text';

const CommitList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 0 -${grid(0.25)};
`;

const CommitItem = styled.li`
    display: flex;
    align-items: center;
`;

const CommitMessage = styled(SmallText)`
    margin: 0 0 0 ${grid(0.5)};
    a { color: inherit; }
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
                    <CommitItem key={commit.hash}>
                        <Avatar src={commit.avatar} size="xsmall" />
                        <CommitMessage>
                            <a href={commit.link}>{commit.hash}</a> - {commit.message}
                        </CommitMessage>
                    </CommitItem>
                ))}
            </CommitList>
        );
    } else {
        return (
            <>
                <small>{content.title}</small>
                <Description>{content.content}</Description>
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
                        <AvatarCell>
                            <Avatar src={act.avatar} label={act.actUser.full_name || act.actUser.username} />

                            <div style={{ marginLeft: grid(1.5) }}>
                                <div>
                                    <a href={act.actUser.home_link} style={{ color: colors.text() }}>
                                        {act.actUser.full_name || act.actUser.username}
                                    </a>
                                </div>
                                <Description dangerouslySetInnerHTML={{ __html: act.message }} />
                                <Description>
                                    <time dateTime={act.time}>
                                        {new Date(act.time).toLocaleString()}
                                    </time>
                                </Description>
                            </div>
                        </AvatarCell>

                        <TopAlignedCell style={{ verticalAlign: 'top' }}>
                            <div style={{ padding: `${grid(1)} 0` }}>
                                {renderActivityContent(act)}
                            </div>
                        </TopAlignedCell>
                    </BorderedRow>
                ))}
            </tbody>
        </table>
    </div>
);
