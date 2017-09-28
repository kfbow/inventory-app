import { fromJS, Set } from 'immutable';
import {
    ADD_CHECKED,
    CLEAR_CHECKED,
    EDIT_FIELD,
    REMOVE_CHECKED,
    SET_DATA,
    SET_PAGE_AMOUNT,
    SET_ITEMS_PER_PAGE,
    SET_PAGE_NUMBER,
    SET_SORT
} from '../constants';

const initialState = fromJS({
    checked: Set(),
    itemsPerPage: 10,
    pageAmount: 1,
    pageNumber: 1,
    sortName: '',
    ascOrder: true
});

export default (
    state = initialState,
    action
) => {
    switch (action.type) {
        case SET_DATA:
            return state.set('data', fromJS(action.data));

        case SET_ITEMS_PER_PAGE:
            return state
                .set('pageNumber', 1)
                .set('itemsPerPage', action.items);

        case SET_PAGE_NUMBER:
            return state.set('pageNumber', action.page);

        case SET_PAGE_AMOUNT:
            return state.set('pageAmount', action.amount);

        case SET_SORT:
            return state
                .set('sortName', action.name)
                .set('ascOrder', action.order);

        case ADD_CHECKED:
            return state.set('checked', state.get('checked').add(action.id));

        case CLEAR_CHECKED:
            return state.set('checked', initialState.get('checked'));

        case REMOVE_CHECKED:
            return state.set('checked', state.get('checked').delete(action.id));

        case EDIT_FIELD:
            return state.setIn([
                'data',
                state.get('data').findKey((v) => v.get('id') === action.id),
                action.name
            ], action.value);

        default:
            return state;
    }
}
