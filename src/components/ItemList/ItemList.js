import React, { Component } from 'react';
import { List } from 'material-ui/List';

import mock from '../../mock.json';
import Item from './Item';
import PaginateRow from './PaginateRow';
import SortBar from './SortBar';

export default class ItemList extends Component {
    componentDidMount() {
        this.props.setData(mock);
    }


    render() {
        const { itemList, searchBar } = this.props;

        let newData = itemList.get('data') || [];

        const renderRows = () => {
            const itemsPerPage = itemList.get('itemsPerPage'),
                sortName = itemList.get('sortName'),
                ascOrder = itemList.get('ascOrder'),
                pageNumber = itemList.get('pageNumber'),
                query = searchBar.get('query');

            const start = (itemsPerPage * (pageNumber - 1));
            const end = start + itemsPerPage;

            if (query) {
                newData = newData
                    .filter(v => {
                        return v
                            .get('name')
                            .toLowerCase()
                            .indexOf(query.toLowerCase()) !== -1
                    })
            }

            if (sortName) {
                newData = newData
                    .sort((a, b) => {
                        a = a.get(sortName);
                        b = b.get(sortName);
                        if (ascOrder === true ? a < b : a > b) { return -1; }
                        if (ascOrder === true ? a > b : a < b) { return 1; }
                        if (a === b) { return 0; }

                        return null;
                    })
            }

            return (
                newData
                    .slice(start, end)
                    .map(el => <Item
                        key={`${el.get('name')}-${el.get('id')}`}
                        data={el} />)
            )
        }

        return (
            <List className="item-list">
                <SortBar />
                { renderRows() }
                <PaginateRow data={newData} />
            </List>
        )
    }
}
