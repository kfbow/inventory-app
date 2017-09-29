import React from 'react';
import RowHead from 'components/Row/RowHead';
import Row from 'components/Row';

const List = ({ columns, data }) => {
    if (data.size) {
        return (
            <div>
                <RowHead columns={columns} />
                {
                    data.map(el =>
                        <Row
                            columns={columns}
                            key={`${el.get('name')}-${el.get('id')}`}
                            element={el} />
                    )
                }
            </div>
        )
    }

    return null;
}

export default List;
