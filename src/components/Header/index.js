import React from 'react';
import Button from 'components/Button';

const styles = {
    buttons: {
        textAlign: 'right'
    }
}

const Header = () => {
    return (
        <div className="row">
            <div className="six columns">
                <h2>Products</h2>
            </div>
            <div className="six columns" style={styles.buttons}>
                <Button
                    label="Export"
                    labelStyle={{ textTransform: 'none' }} />
                <Button
                    label="Import"
                    labelStyle={{ textTransform: 'none' }} />
                <Button
                    backgroundColor="#0076ff"
                    label="Add Product"
                    labelColor="#fff"
                    labelStyle={{ textTransform: 'none' }} />
            </div>
        </div>
    )
}

export default Header;
