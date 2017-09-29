import React from 'react';
import { connect } from 'react-redux';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import { addCheck } from 'redux/checked/actions';

const styles = {
    centerize: {
        display: 'flex',
        alignItems: 'center'
    },
    checkbox: {
        top: 7
    },
    checkboxIcon: {
        fill: '#7a7a7a'
    },
    divider: {
        marginTop: 0
    },
    right: {
        textAlign: 'right'
    },
    thumbnail: {
        border: '1px solid #e5e5e5',
        marginRight: '.5em'
    }
}

const renderCheckbox = (addCheck, id) => {
    return (
        <Checkbox
            checked={false}
            iconStyle={styles.checkboxIcon}
            onCheck={() => {addCheck(id)}}
            style={styles.checkbox} />
    )
}

const RowStatic = ({ addCheck, columns, element }) => {
    const name = element.get('name');
    const id = element.get('id');

    return (
        <div>
            <ListItem
                leftIcon={renderCheckbox(addCheck, id)}
                onClick={() => {addCheck(id)}}
            >
                <div className="row" style={styles.centerize}>
                    <div className="six columns" style={styles.centerize}>
                        <img
                            alt={name}
                            src={element.get('thumbnail')}
                            style={styles.thumbnail} />
                        <span>{name}</span>
                    </div>
                    <div className="two columns">
                        <span>{element.get('type')}</span>
                    </div>
                    <div className="two columns" style={styles.right}>
                        <span>${element.get('price').toFixed(2)}</span>
                    </div>
                    <div className="two columns" style={styles.right}>
                        <span>{element.get('inventory')}</span>
                    </div>
                </div>
            </ListItem>
            <Divider style={ styles.divider } />
        </div>
    )
}

export default connect(
    null,
    { addCheck }
)(RowStatic);
