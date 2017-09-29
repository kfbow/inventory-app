import React from 'react';
import TextField from 'material-ui/TextField';
import _ from 'lodash';

const styles = {
    main: {
        backgroundColor: '#fff',
        border: '1px solid #e5e5e5',
        borderRaduis: '5px'
    }
}

const TextInput = ({
    className = '',
    hintStyle = {},
    hintText = '',
    inputStyle = { textAlign: 'right' },
    onChange = null,
    value = ''
}) => {
    return (
        <TextField
            className={className}
            id={value + ' '}
            fullWidth={true}
            hintStyle={hintStyle}
            hintText={hintText}
            inputStyle={inputStyle}
            onChange={onChange}
            style={styles.main}
            type="number"
            underlineShow={false}
            value={_.isNumber(value) >= 0 ? Math.abs(value) : ''} />
    )
}

export default TextInput;
