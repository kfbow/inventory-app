import { fromJS } from 'immutable';
import {
    SET_QUERY
} from '../constants';

const initialState = fromJS({ query: '' });

export default (
    state = initialState,
    action
) => {
    switch (action.type) {
        case SET_QUERY:
            return state.set('query', action.query);

        default:
            return state;
    }
}
