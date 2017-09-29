import React from 'react';
import { connect } from 'react-redux';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { setPageNumber, setPerPage } from 'redux/inventory/actions';

const Dropdown = ({
    inventory,
    onChange,
    setPageNumber,
    setPerPage,
    type = '',
    values
}) => {
    if (type === 'perPage') {
        return (
            <DropDownMenu
                value={inventory.get('perPage')}
                onChange={(e,i,v) => setPerPage(v)}>
                {
                    values.map((el, i) =>
                        <MenuItem
                            key={`${el}-${i}`}
                            value={el}
                            primaryText={el} />)
                }
            </DropDownMenu>
        )
    }

    if (type === 'pageNumber') {
        let items = [];
        for (let i = 1; i <= inventory.get('pageAmount'); i++) {
            items.push(
                <MenuItem
                    key={`${i}-page`}
                    value={i}
                    primaryText={i} />
            )
        }

        return (
            <DropDownMenu
                value={inventory.get('pageNumber')}
                onChange={(e,i,v) => setPageNumber(v)}>
                {items}
            </DropDownMenu>
        )
    }

    return null;
}

export default connect(
    ({ inventory }) => ({ inventory }),
    { setPageNumber, setPerPage }
)(Dropdown);
