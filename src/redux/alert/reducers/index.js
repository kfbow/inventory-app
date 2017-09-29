import {
    SET_ALERT
} from '../constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    message: ''
});

export default (
    state = initialState,
    action
) => {
    switch (action.type) {
        case SET_ALERT:
            return state.set('message', action.message);

        default:
            return state;
    }
}
