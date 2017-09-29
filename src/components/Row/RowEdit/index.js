import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import { editField, putProduct } from 'redux/inventory/actions';
import { deleteCheck } from 'redux/checked/actions';
import { setAlert } from 'redux/alert/actions';
import TextInput from 'components/Fields/TextInput';
import NumberInput from 'components/Fields/NumberInput';

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
    item: {
        backgroundColor: '#f8f9fa'
    },
    right: {
        textAlign: 'right'
    },
    thumbnail: {
        border: '1px solid #e5e5e5',
        marginRight: '.5em'
    }
}

class RowEdit extends Component {
    constructor(props) {
        super(props);

        const element = props.element;

        this.state = {
            inventory: element.get('inventory', ''),
            name: element.get('name', ''),
            price: element.get('price', ''),
            type: element.get('type', '')
        }
    }

    componentWillUnmount() {
        this.props.columns.map((v, k) => {
            const id = this.props.element.get('id');
            const key = k.toLowerCase();

            if (this.props.element.get(key) === this.state[key]) {
                return;
            }

            this.props.editField(
                id,
                key,
                this.state[key]
            );

            return this.props.putProduct(id, this.state);
        })
    }

    onChange = (name, value) => {
        if (Number(value)) {
            return this.setState({ [name]: Number(value) });
        }

        return this.setState({ [name]: value });
    };

    renderCheckbox = (deleteCheck, id) => {
        return (
            <Checkbox
                checked={true}
                iconStyle={styles.checkboxIcon}
                onCheck={() => {
                    let missing = false;
                    this.props.columns.map((v, k) => {
                        const key = k.toLowerCase();
                        const value = this.state[key];

                        if (typeof value === 'string'
                                && value.trim() === '') {
                            missing = true;
                        }

                        return null;
                    })
                    return missing
                    ? this.props.setAlert('Please add missing data')
                    : deleteCheck(id)
                }}
                style={styles.checkbox} />
        )
    }

    render() {
        const { deleteCheck, element } = this.props;

        const name = element.get('name');
        const id = element.get('id');

        return (
            <div>
                <ListItem
                    leftIcon={this.renderCheckbox(deleteCheck, id)}
                    onClick={() => {}}
                    style={styles.item}
                >
                    <div className="row" style={styles.centerize}>
                        <div className="six columns" style={styles.centerize}>
                            <img
                                alt={name}
                                src={element.get('thumbnail')}
                                style={styles.thumbnail} />
                                <TextInput
                                    onChange={e => this.onChange(
                                        'name', e.target.value
                                    )}
                                    value={this.state.name} />
                        </div>
                        <div className="two columns">
                            <TextInput
                                onChange={e => this.onChange(
                                    'type', e.target.value
                                )}
                                value={this.state.type} />
                        </div>
                        <div className="two columns" style={styles.right}>
                            <NumberInput
                                onChange={e => this.onChange(
                                    'price', e.target.value
                                )}
                                value={this.state.price} />
                        </div>
                        <div className="two columns" style={styles.right}>
                            <NumberInput
                                onChange={e => this.onChange(
                                    'inventory', e.target.value
                                )}
                                value={this.state.inventory} />
                        </div>
                    </div>
                </ListItem>
                <Divider style={ styles.divider } />
            </div>
        )
    }
}

export default connect(
    null,
    { deleteCheck, editField, putProduct, setAlert }
)(RowEdit);
