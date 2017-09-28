import { connect } from 'react-redux';
import { setPageAmount } from 'redux/itemList/actions';

import PaginateRow from './PaginateRow';

export default connect(
    ({ itemList }) => ({ itemList }),
    { setPageAmount }
)(PaginateRow);
