import React from 'react';
import { connect } from 'react-redux';
import RowEdit from './RowEdit';
import RowStatic from './RowStatic';

const Row = ({ checked, columns, element }) => {
    if (checked.get('checked').includes(element.get('id'))) {
        return <RowEdit columns={columns} element={element} />
    }

    return <RowStatic columns={columns} element={element} />
}

export default connect(
    ({ checked }) => ({ checked })
)(Row);
