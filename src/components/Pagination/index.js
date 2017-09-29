import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'components/Fields/Dropdown';
import Button from 'components/Button';
import { setPageNumber } from 'redux/inventory/actions';

const styles = {
    centerize: {
        display: 'flex',
        alignItems: 'center'
    },
    paginator: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}

const Pagination = ({ data, inventory, setPageNumber }) => {
    const pageNumber = inventory.get('pageNumber');

    return (
        <div className="row">

            <div className="six columns" style={styles.centerize}>
                <span>Items per page:&nbsp;</span>
                <Dropdown data={data} values={[5,10,15]} type="perPage" />
            </div>

            <div className="six columns" style={styles.paginator}>
                <Button
                    iconClassName="fa fa-angle-left"
                    onClick={() =>
                        setPageNumber(pageNumber - 1)}
                />

                <Dropdown data={data} type="pageNumber" />

                <Button
                    iconClassName="fa fa-angle-right"
                    onClick={() =>
                        setPageNumber(pageNumber + 1)}
                />
            </div>

        </div>
    )
}

export default connect(
    ({ inventory }) => ({ inventory }),
    { setPageNumber }
)(Pagination);
