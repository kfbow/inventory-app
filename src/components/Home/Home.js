import React from 'react';

import Header from './Header';
import ItemList from '../ItemList';
import SearchBar from '../SearchBar';

const renderAlert = (alert) => {
    const message = alert.get('message')
    if (message) {
        return (
            <div className="main-alert">
                <span>{message}</span>
            </div>
        )
    }
}

const Home = ({ alert }) => {
    return (
        <div>
            { renderAlert(alert) }
            <div className="row">
                <div className="twelve columns">
                    <Header />
                    <SearchBar />
                    <ItemList />
                </div>
            </div>
        </div>
    )
}

export default Home;
