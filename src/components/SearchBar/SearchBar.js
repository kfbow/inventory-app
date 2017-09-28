import React from 'react';
import TextField from 'material-ui/TextField';

const SearchBar = ({ searchBar, setQuery }) => {
    return (
        <TextField
            hintText={<span><i className="fa fa-search"/>&nbsp;Search...</span>}
            onChange={(e) => setQuery(e.target.value)}
            value={searchBar.get('query')}
        />
    )
}

export default SearchBar;
