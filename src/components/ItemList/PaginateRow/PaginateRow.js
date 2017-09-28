import React, { Component } from 'react';

import PageSelector from './PageSelector';
import PerPage from './PerPage';

export default class PaginateRow extends Component {
    setPages = () => {
        const pages = Math.ceil(
            this.props.data.size / this.props.itemList.get('itemsPerPage')
        );

        this.props.setPageAmount(pages);
    }

    componentDidMount() {
        this.setPages();
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.itemList.get('itemsPerPage') !==
                this.props.itemList.get('itemsPerPage')
            || prevProps.data.size !== this.props.data.size
        ) {
            this.setPages();
        }
    }

    render() {
        return (
            <div className="row">
                <div className="six columns">
                    <PerPage />
                </div>
                <div className="six columns right">
                    <PageSelector />
                </div>
            </div>
        )
    }
}
