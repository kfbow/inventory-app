import React, { Component } from 'react';
import { List } from 'material-ui/List';
import axios from 'axios';
import { BASE_URL } from 'config/variables';

// import mock from '../../mock.json';
import Item from './Item';
import PaginateRow from './PaginateRow';
import SortBar from './SortBar';

export default class ItemList extends Component {
    componentDidMount() {
        axios
            .get(`${BASE_URL}/products`)
            .then((res) => this.props.setData(res.data))
            .catch((err) => console.log(err))
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
                        a = Number(a.get(sortName)) ? a.get(sortName) : a.get(sortName).toLowerCase();
                        b = Number(b.get(sortName)) ? b.get(sortName) : b.get(sortName).toLowerCase();;
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
