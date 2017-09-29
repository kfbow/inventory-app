import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import { addCheck, deleteCheck } from 'redux/checked/actions';
import { setSort } from 'redux/inventory/actions';

const styles = {
    checkbox: {
        top: 7
    },
    checkboxIcon: {
        fill: '#7a7a7a'
    }
}

class RowHead extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
            order: ''
        }
    }

    renderCheckbox = () => {
        return (
            <Checkbox
                checked={this.state.checked}
                iconStyle={styles.checkboxIcon}
                onCheck={() => {
                    this.setState({ checked: !this.state.checked });

                    if (this.state.checked) {
                        return this.props.inventory.get('items').map(el => {
                            this.props.deleteCheck(el.get('id'));
                        });
                    }

                    this.props.inventory.get('items').map(el => {
                        this.props.addCheck(el.get('id'));
                    });
                }}
                style={styles.checkbox} />
        )
    }

    render() {
        const { columns, inventory, setSort } = this.props;

        const order = this.state.order === 'asc' ? 'desc' : 'asc';

        return (
            <div>
                <ListItem
                    disabled={true}
                    leftIcon={this.renderCheckbox()}>
                    <div className="row" style={{ padding: '7px 0' }}>
                        {
                            columns.entrySeq().map(([k, v]) => {
                                let icon = '';
                                const key = k.toLowerCase();

                                if (
                                    inventory.get('sortName') === key
                                ) {
                                    icon = `fa fa-caret-${
                                        this.state.order
                                        && order === 'asc' ? 'down' : 'up'
                                    }`
                                }
                                return (
                                    <div className={v} key={`${k}-${v}`}>
                                        <span onClick={() => {
                                            setSort(key, order);
                                            this.setState({ order });
                                        }}>
                                            {k} <i className={icon} />
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </ListItem>
                <Divider />
            </div>
            )
    }
}

export default connect(
    ({ inventory }) => ({ inventory }),
    { addCheck, deleteCheck, setSort }
)(RowHead);
