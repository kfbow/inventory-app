import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import { setQuery } from 'redux/inventory/actions';

const styles = {
    main: {
        border: '1px solid #bdbdbd',
        paddingLeft: 10
    }
}

const SearchInput = ({
    className = '',
    hintStyle = { color: '#a8a8a8' },
    inventory,
    setQuery,
    value = ''
}) => {
    return (
        <TextField
            className={className}
            hintStyle={hintStyle}
            hintText={<span><i className="fa fa-search"/>&nbsp;Search...</span>}
            onChange={e => setQuery(e.target.value)}
            style={styles.main}
            underlineShow={false}
            value={inventory.get('query')}
        />
    )
}

export default connect(
    ({ inventory }) => ({ inventory }),
    { setQuery }
)(SearchInput);
