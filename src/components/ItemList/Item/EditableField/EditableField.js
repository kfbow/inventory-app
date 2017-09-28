import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class EditableField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.data || ''
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const id = this.props.id;
        const name = this.props.name;

        if (
            prevProps.checked === true
            && this.props.checked === false
            && this.state.text !== this.props.data
        ) {
            if (!this.state.text) {
                this.props.newAlert(`Please add the missing ${name}`);
                return this.props.addChecked(id);
            }

            if (this.props.alert.get('message')) {
                this.props.newAlert('');
            }

            this.props.editField(
                id,
                name,
                this.state.text
            );
        }
    }

    render() {
        const { checked, data, id } = this.props;

        const isNumber = Number(this.props.data);

        return checked
            ? <TextField
                fullWidth={true}
                id={`${id}-${data}`}
                inputStyle={{ textAlign: isNumber ? 'right': 'left' }}
                onChange={e => this.setState({ text: e.target.value })}
                type={isNumber ? 'number' : 'text'}
                value={this.state.text} />
            : <span>{data}</span>
    }
}

export default EditableField;
