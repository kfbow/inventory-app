import React from 'react';
import { connect } from 'react-redux';

const styles = {
    main: {
        backgroundColor: '#F44336',
        color: '#fff',
        padding: 30,
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        zIndex: '2'
    }
}

const Alert = ({ alert }) => {
    if (alert.get('message')) {
        return (
            <div style={styles.main}>
                <span>{alert.get('message')}</span>
            </div>
        )
    }

    return null;
}

export default connect(
    ({ alert }) => ({ alert })
)(Alert)
