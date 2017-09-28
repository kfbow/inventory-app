import { fromJS } from 'immutable';
import {
    NEW_ALERT
} from '../constants';

const initialState = fromJS({ message: '' });

export default (
    state = initialState,
    action
) => {
    switch (action.type) {
        case NEW_ALERT:
            return state.set('message', action.message);

        default:
            return state;
    }
}
