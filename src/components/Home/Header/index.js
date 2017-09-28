import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Header = () => {
    return (
        <div className="row">
            <div className="six columns">
                <h2>Products</h2>
            </div>
            <div className="six columns button-set right">
                <RaisedButton label="Export" />
                <RaisedButton label="Import" />
                <RaisedButton
                    backgroundColor="#0076ff"
                    label="Add Product"
                    labelColor="#fff" />
            </div>
        </div>
    )
}

export default Header;
