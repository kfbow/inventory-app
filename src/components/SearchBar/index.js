import { connect } from 'react-redux';
import { setQuery } from 'redux/searchBar/actions';

import SearchBar from './SearchBar';

export default connect(
    ({ searchBar }) => ({ searchBar }),
    { setQuery }
)(SearchBar);
