import { connect } from 'react-redux';
import { setData } from 'redux/itemList/actions';

import ItemList from './ItemList';

export default connect(
    ({ itemList, searchBar }) => ({ itemList, searchBar }),
    { setData }
)(ItemList);
