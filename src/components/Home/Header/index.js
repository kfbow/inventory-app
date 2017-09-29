import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Header = () => {
    return (
        <div className="row">
            <div className="six columns">
                <h2>Products</h2>
            </div>
            <div className="six columns button-set right">
                <RaisedButton
                    label="Export"
                    labelStyle={{ textTransform: 'none' }} />
                <RaisedButton
                    label="Import"
                    labelStyle={{ textTransform: 'none' }} />
                <RaisedButton
                    backgroundColor="#0076ff"
                    label="Add Product"
                    labelColor="#fff"
                    labelStyle={{ textTransform: 'none' }} />
            </div>
        </div>
    )
}

export default Header;
