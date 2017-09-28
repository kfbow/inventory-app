import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider'

import EditableField from './EditableField';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
        }
    }

    toggleCheck = (checked) => {
        const id = this.props.data.get('id');

        if (checked) {
            return this.props.removeChecked(id);
        }

        return this.props.addChecked(id);
    }

    renderCheckbox = (checked) => {
        return (
            <Checkbox
                checked={checked}
                iconStyle={{ fill: checked ? '#0076ff' :'#7a7a7a' }}
                onCheck={checked ? () => this.toggleCheck(checked) : null}
                style={{ top: 2 }} />
        )
    }

    renderData = (data, checked) => {
        const id = data.get('id'),
            name = data.get('name'),
            type = data.get('type'),
            price = Number(data.get('price')).toFixed(2),
            inventory = data.get('inventory');

        return (
            <div className="row item-row">
                <div className="six columns item-name">
                    <img alt={name} src={data.get('thumbnail')} />
                    <EditableField
                        checked={checked}
                        data={name}
                        id={id}
                        name='name' />
                </div>
                <div className="two columns">
                    <EditableField
                        checked={checked}
                        data={type}
                        id={id}
                        name='type'/>
                </div>
                <div className={`two columns ${checked ? '' : 'item-price'}`}>
                    <EditableField
                        checked={checked}
                        data={price}
                        id={id}
                        name="price" />
                </div>
                <div className="two columns item-inventory">
                    <EditableField
                        checked={checked}
                        data={inventory}
                        id={id}
                        name="inventory" />
                </div>
            </div>
        )
    }

    render() {
        const { data, itemList } = this.props;
        const id = data.get('id');
        const checked = itemList.get('checked').has(id);
        const name = data.get('name');

        return ([
            <ListItem
                innerDivStyle={{ paddingBottom: 10, paddingTop: 10 }}
                key={`${name}-${id}-item`}
                leftIcon={this.renderCheckbox(checked)}
                onClick={checked ? null : () => this.toggleCheck(checked)}
                style={{ backgroundColor: checked ? '#f8f9fa' : 'inherit' }}
            >
                { this.renderData(data, checked) }
            </ListItem>,
            <Divider key={`${name}-${id}-divider`} style={{ marginTop: 0 }} />
        ])
    }
}

export default Item;
