import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const PerPage = ({ itemList, setItemsPerPage }) => {
    return (
        <div>
            <span key={`perPage-span`}>Items per page:</span>
            <DropDownMenu
                className="per-page"
                iconStyle={{ display: 'none' }}
                key={`perPage-drop`}
                underlineStyle={{ display: 'none' }}
                value={itemList.get('itemsPerPage')}
                onChange={(e,i,v) => setItemsPerPage(v)}
            >
                <MenuItem value={5} primaryText="5" />
                <MenuItem value={10} primaryText="10" />
                <MenuItem value={15} primaryText="15" />
            </DropDownMenu>
        </div>
    )
}

export default PerPage;
