// @flow
import * as React from 'react';

import { debounce } from 'lodash-es';
import { FieldTextStateless } from '@atlaskit/field-text';
import Select from '@atlaskit/select';

import ContentLayout from './ContentLayout';
import RepositoriesTable from './RepositoriesTable';
import { FlexRow, grid } from '@src/utils';

type State = {
    loading: boolean;
    keywords: string;
    mode: string;
    repos: Repo[];
}

export default class RepositoriesPage extends React.Component<{}, State> {
    state = {
        loading: true,
        keywords: '',
        mode: '',
        repos: [],
    };

    searchRepos = debounce(async () => {
        this.setState({
            loading: true,
        });

        const url = `${GlobalData.baseUri}/api/v1/repos/search?sort=updated&order=desc\
&uid=${GlobalData.contextUser.id}&q=${this.state.keywords}&limit=15\
&mode=${this.state.mode}${this.state.mode === '' ? '&exclusive=1' : ''}`;

        const data = await fetch(url).then(r => r.json());

        this.setState({
            loading: false,
            repos: data.data,
        });
    }, 300);

    onKeywordChanged = (e: SyntheticKeyboardEvent<*>) => {
        this.setState({
            keywords: e.currentTarget.value,
        });

        this.searchRepos();
    };

    onTypeChanged = (type: { mode: string; }) => {
        this.setState({
            mode: type.mode,
        });

        this.searchRepos();
    };

    componentDidMount() {
        this.setState({
            loading: true,
            keywords: '',
            mode: '',
            repos: [],
        });

        this.searchRepos();
    }

    render() {
        return (
            <ContentLayout title="Repositories">
                <FlexRow style={{ marginBottom: grid(1.5) }}>
                    <div style={{ width: grid(32) }}>
                        <FieldTextStateless
                            shouldFitContainer={true}
                            isLabelHidden={true}
                            value={this.state.keywords}
                            onChange={this.onKeywordChanged}
                            placeholder="Search repositories" />
                    </div>

                    <div style={{ width: grid(16), marginLeft: grid(2) }}>
                        <Select
                            options={[
                                { label: 'All', value: 'all', mode: '' },
                                { label: 'Sources', value: 'source', mode: 'source' },
                                { label: 'Forks', value: 'fork', mode: 'fork' },
                                { label: 'Mirrors', value: 'mirror', mode: 'mirror' },
                                { label: 'Collaborative', value: 'collaborative', mode: 'collaborative' },
                            ]}
                            shouldFitContainer={true}
                            onChange={this.onTypeChanged}
                            isSearchable={false}
                            blurInputOnSelect={true}
                            placeholder="All" />
                    </div>
                </FlexRow>

                <RepositoriesTable repos={this.state.repos} />

                <p><a href={GlobalData.contextUser.home_link}>Show more repositories</a></p>
            </ContentLayout>
        );
    }
}

