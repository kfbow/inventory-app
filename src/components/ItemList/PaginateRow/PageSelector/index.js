import { connect } from 'react-redux';
import { setPageNumber } from 'redux/itemList/actions';

import PageSelector from './PageSelector';

export default connect(
    ({ itemList }) => ({ itemList }),
    { setPageNumber }
)(PageSelector);
