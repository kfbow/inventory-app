import React from 'react';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    main: {
        margin: 10
    }
}

const Button = ({
    backgroundColor = '#fff',
    iconClassName = '',
    label = '',
    labelColor = '#000',
    labelStyle = {},
    onClick = () => {}
}) => {
    if (iconClassName) {
        return (
            <IconButton
                onClick={onClick}
                iconClassName={iconClassName} />
        )
    }

    return (
        <RaisedButton
            backgroundColor={backgroundColor}
            label={label}
            labelColor={labelColor}
            labelStyle={labelStyle}
            onClick={onClick}
            style={styles.main}/>
    )
}

export default Button;
