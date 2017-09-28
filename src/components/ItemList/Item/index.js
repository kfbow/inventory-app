import { connect } from 'react-redux';
import { addChecked, removeChecked } from 'redux/itemList/actions';

import Item from './Item';

export default connect(
    ({ itemList }) => ({ itemList }),
    { addChecked, removeChecked }
)(Item);
