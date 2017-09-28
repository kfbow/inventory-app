import { connect } from 'react-redux';
import { setItemsPerPage } from 'redux/itemList/actions';

import PerPage from './PerPage';

export default connect(
    ({ itemList }) => ({ itemList }),
    { setItemsPerPage }
)(PerPage);
