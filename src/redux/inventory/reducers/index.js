import {
    EDIT_FIELD,
    SET_DATA,
    SET_PAGE_AMOUNT,
    SET_PAGE_NUMBER,
    SET_PER_PAGE,
    SET_QUERY,
    SET_SORT
} from '../constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    displayedItems: new Map(),
    initialItems: new Map(),
    items: new Map(),
    pageAmount: 1,
    pageNumber: 1,
    perPage: 10,
    query: '',
    sortName: ''
});

export default (
    state = initialState,
    action
) => {
    switch (action.type) {
        case EDIT_FIELD:
            const id = state
                .get('items')
                .findKey((v) => v.get('id') === action.id);

            return state
                .setIn(['items', id, action.name], action.value)
                .setIn(['displayedItems', id, action.name], action.value)

        case SET_DATA:
            const newItems = action.data.slice(0, state.get('perPage'));
            const amount = Math.ceil(action.data.size / state.get('perPage'));

            return state
                .set('initialItems', action.data)
                .set('items', action.data)
                .set('displayedItems', newItems)
                .set('pageAmount', amount);

        case SET_PAGE_AMOUNT:
            return state.set('pageAmount', action.pages);

        /*
        // This case has more functionality than most others. The amount of
        // pages is first found and then the page constant tests whether or
        // not the page from the action is within bounds. Next, the start and
        // end indexes are established for the splice.
        */
        case SET_PAGE_NUMBER:
            if (!action.page > 0 || action.page > state.get('pageAmount')) {
                return state;
            }

            const page = action.page;
            const perPage = state.get('perPage');
            const start = (perPage * (page - 1));
            const end = start + perPage

            return state
                .set('pageNumber', page)
                .set('displayedItems', state.get('items').slice(start, end));

        case SET_PER_PAGE:
            const items = state.get('items');

            return state
                .set('perPage', action.amount)
                .set('pageNumber', 1)
                .set('displayedItems', items.slice(0, action.amount))
                .set('pageAmount', Math.ceil(items.size / action.amount));

        /*
        // This one was much trickier than it looks. It took a bit for me to
        // realize I needed to merge in the original data becasuse the items
        // map was continually shrinking and ruining the persistence.
        */
        case SET_QUERY:
            const filteredItems = state.get('items')
                .mergeDeep(state.get('initialItems'))
                .filter(v => {
                    return v
                        .get('name')
                        .toLowerCase()
                        .indexOf(action.query.toLowerCase()) !== -1
                })

            return state
                .set('query', action.query)
                .set('displayedItems', filteredItems.slice(
                    0,
                    state.get('perPage')
                ))
                .set('items', filteredItems)
                .set('pageAmount', Math.ceil(
                    filteredItems.size / state.get('perPage')
                ), 1);

        /*
        // Sorting can seem really messy up front. Immutable.js sort was used
        // here and the docs are very straightforward:
        // https://facebook.github.io/immutable-js/docs/#/Map/sort
        */
        case SET_SORT:
            const sortName = action.name;
            const ascOrder = action.order === 'asc';
            const getChar = (char, name) => Number(char.get(name))
                ? char.get(name)
                : char.get(name).toLowerCase();
            const sortedItems = state.get('items').sort((a, b) => {
                a = getChar(a, sortName);
                b = getChar(b, sortName)
                if (ascOrder ? a < b : a > b) { return -1; }
                if (ascOrder ? a > b : a < b) { return 1; }
                if (a === b) { return 0; }

                return null;
            })

            return state
                .set('sortName', action.name)
                .set('displayedItems', sortedItems.slice(
                    0,
                    state.get('perPage')
                ))
                .set('items', sortedItems)
                .set('pageNumber', 1);

        default:
            return state;
    }
}
