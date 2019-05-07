import React from 'react';

interface Props {
    as: string;
}

export default class Dashboard extends React.Component<Props> {
    render() {
        return <div>{this.props.as}</div>;
    }
}
