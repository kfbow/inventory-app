import { connect } from 'react-redux';
import { addChecked, clearChecked, setSort } from 'redux/itemList/actions';

import SortBar from './SortBar';

export default connect(
    ({ itemList }) => ({ itemList }),
    { addChecked, clearChecked, setSort }
)(SortBar);
