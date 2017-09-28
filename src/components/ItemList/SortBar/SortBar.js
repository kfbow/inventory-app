import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import { Map } from 'immutable';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';

const titles = Map({
    'Name': 'six columns',
    'Type': 'two columns',
    'Price': 'two columns right',
    'Inventory': 'two columns right'
})

export default class SortBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
        }
    }

    toggleCheck = (e) => {
        this.setState({ checked: !this.state.checked });

        if (this.state.checked) {
            return this.props.clearChecked();
        }

        this.props.itemList.get('data').map(el => this.props.addChecked(el.get('id')));
    }

    renderCheckbox = (checked) => {
        return (
            <Checkbox
                checked={checked}
                iconStyle={{ fill: '#7a7a7a' }}
                onCheck={this.toggleCheck}
                style={{ top: 7 }}
            />
        )
    }

    renderTitleText = () => {
        return titles.entrySeq().map(([k, v]) => {
            return (
                <div className={v} key={`${k}-${v}`}>
                    <span onClick={() => this.onTitleClick(k.toLowerCase())}>
                        {k}
                    </span>
                </div>
            )
        })
    }

    onTitleClick = (name) => {
        this.props.setSort(
            name,
            this.props.itemList.get('sortName') === name
                ? !this.props.itemList.get('ascOrder')
                : true
        )
    }

    render() {
        return (
            <div>
                <ListItem
                    disabled={true}
                    leftIcon={this.renderCheckbox(this.state.checked)}>
                    <div className="row sort-row">
                        { this.renderTitleText() }
                    </div>
                </ListItem>
                <Divider />
            </div>
        )
    }
}
