import { connect } from 'react-redux';
import { editField, addChecked } from 'redux/itemList/actions';
import { newAlert } from 'redux/alert/actions';

import EditableField from './EditableField';

export default connect(
    ({ alert, itemList }) => ({ alert, itemList }),
    { addChecked, editField, newAlert }
)(EditableField);
