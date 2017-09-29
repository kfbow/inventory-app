import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import { setQuery } from 'redux/inventory/actions';

const SearchInput = ({
    className = '', hintStyle = {}, inventory, setQuery, value = ''
}) => {
    return (
        <TextField
            className={className}
            hintStyle={hintStyle}
            hintText={<span><i className="fa fa-search"/>&nbsp;Search...</span>}
            onChange={e => setQuery(e.target.value)}
            underlineShow={false}
            value={inventory.get('query')}
        />
    )
}

export default connect(
    ({ inventory }) => ({ inventory }),
    { setQuery }
)(SearchInput);
