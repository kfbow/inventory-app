import React from 'react';
import TextField from 'material-ui/TextField';

const styles = {
    main: {
        backgroundColor: '#fff',
        border: '1px solid #e5e5e5',
        borderRaduis: '5px',
        paddingLeft: 5
    }
}

const TextInput = ({
    className = '',
    hintStyle = {},
    hintText = '',
    inputStyle = {},
    onChange = null,
    value = ''
}) => {
    return (
        <TextField
            className={className}
            id={value}
            fullWidth={true}
            hintStyle={hintStyle}
            hintText={hintText}
            inputStyle={inputStyle}
            onChange={onChange}
            style={styles.main}
            underlineShow={false}
            value={value} />
    )
}

export default TextInput;
