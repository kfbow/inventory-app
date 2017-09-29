import {
    ADD_CHECK,
    DELETE_CHECK
} from '../constants';
import { fromJS, Set } from 'immutable';

const initialState = fromJS({
    checked: new Set()
});

export default (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ADD_CHECK:
            return state.set('checked', state.get('checked').add(action.id));

        case DELETE_CHECK:
            return state.set('checked', state.get('checked').delete(action.id));

        default:
            return state;
    }
}
