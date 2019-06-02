// @flow
import * as React from 'react';

import { debounce } from 'lodash-es';
import * as queryString from 'query-string';
import { FieldTextStateless } from '@atlaskit/field-text';
import Select from '@atlaskit/select';

import { grid } from '@src/utils';
import { FlexRow } from '@src/components/layout';
import ContentLayout from './content-layout';
import RepositoriesTable from './repositories-table';

type State = {
    loading: boolean;
    keywords: string;
    mode: string;
    repos: Repo[];
}

export default class RepositoriesPage extends React.Component<{}, State> {
    static allRepos = null;

    static async getAllRepos() {
        if (this.allRepos !== null) {
            return this.allRepos;
        }

        const cond = queryString.stringify({
            sort: 'updated',
            order: 'desc',
            uid: GlobalData.contextUser.id,
            limit: 15,
        });
        const url = `${GlobalData.baseUri}/api/v1/repos/search?${cond}`;

        const data = await fetch(url).then(r => r.json());

        return this.allRepos = data.data;
    }

    state = {
        loading: true,
        keywords: '',
        mode: '',
        repos: [],
    };

    searchRepos = async () => {
        const { keywords, mode } = this.state;

        this.setState({
            loading: true,
        });

        if (mode === '' && keywords === '') {
            this.setState({
                loading: false,
                repos: await RepositoriesPage.getAllRepos(),
            });
            return;
        }

        const cond = queryString.stringify({
            sort: 'updated',
            order: 'desc',
            uid: GlobalData.contextUser.id,
            q: this.state.keywords,
            limit: 15,
            mode: this.state.mode,
            exclusive: this.state.mode !== '',
        });
        const url = `${GlobalData.baseUri}/api/v1/repos/search?${cond}`;

        const data = await fetch(url).then(r => r.json());

        this.setState({
            loading: false,
            repos: data.data,
        });
    };

    searchReposDebounced = debounce(this.searchRepos, 300);

    onKeywordChanged = (e: SyntheticKeyboardEvent<*>) => {
        this.setState({
            keywords: e.currentTarget.value,
        }, this.searchReposDebounced);
    };

    onTypeChanged = (type: { mode: string; }) => {
        this.setState({
            mode: type.mode,
        }, this.searchReposDebounced);
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

                <RepositoriesTable loading={this.state.loading} repos={this.state.repos} />

                <p><a href={GlobalData.contextUser.home_link}>Show more repositories</a></p>
            </ContentLayout>
        );
    }
}
