import React from 'react';
import TextField from 'material-ui/TextField';

const SearchBar = ({ searchBar, setQuery }) => {
    return (
        <TextField
            className="search-bar"
            hintStyle={{ paddingLeft: '1.5em' }}
            hintText={<span><i className="fa fa-search"/>&nbsp;Search...</span>}
            onChange={(e) => setQuery(e.target.value)}
            underlineShow={false}
            value={searchBar.get('query')}
        />
    )
}

export default SearchBar;
