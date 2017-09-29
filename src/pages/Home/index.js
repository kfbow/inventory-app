import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from 'redux/inventory/actions';
import Header from 'components/Header';
import List from 'components/List';
import SearchInput from 'components/Fields/SearchInput';
import Pagination from 'components/Pagination';
import { Map } from 'immutable';
import Alert from 'components/Alert';

const columns = Map({
    'Name': 'six columns',
    'Type': 'two columns',
    'Price': 'two columns right',
    'Inventory': 'two columns right'
})

class Home extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const data = this.props.inventory.get('displayedItems');

        return (
            <div>
                <Alert />
                <div className="row">
                    <div className="twelve columns">
                        <Header />
                        <SearchInput />
                        <List columns={columns} data={data} />
                        <Pagination data={data} />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    ({ inventory }) => ({ inventory }),
    { fetchData }
)(Home);
