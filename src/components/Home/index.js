import { connect } from 'react-redux';

import Home from './Home';

export default connect(
    ({ alert }) => ({ alert })
)(Home);
