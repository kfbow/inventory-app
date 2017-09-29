import React from 'react';
import IconButton from 'material-ui/IconButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const now = new Date();

const PageSelector = ({ itemList, setPageNumber }) => {
    const pages = itemList.get('pageAmount');

    const renderMenuItems = () => {
        let items = [];
        for (let i = 1; i <= pages; i++) {
            items.push(
                <MenuItem
                    key={`paginateRow-${now + i}`}
                    value={i}
                    primaryText={i} />
            )
        }

        return items;
    }

    const changePage = (option) => {
        const currentPage = itemList.get('pageNumber');
        if (option === 'up' && currentPage !== itemList.get('pageAmount')) {
            return setPageNumber(currentPage + 1);
        }

        if (option === 'down' && currentPage !== 1) {
            return setPageNumber(currentPage - 1);
        }
    }

    return (
        <div>
            <IconButton
                onClick={() => changePage('down')}
                iconClassName="fa fa-angle-left" />
            <DropDownMenu
                value={itemList.get('pageNumber')}
                onChange={(e,i,v) => setPageNumber(v)}>

                {renderMenuItems()}

            </DropDownMenu>
            <IconButton onClick={() => changePage('up')} iconClassName="fa fa-angle-right"/>
        </div>
    )
}

export default PageSelector;
