import {
    SET_QUERY
} from '../constants';

export const setQuery = (query) => ({
    query,
    type: SET_QUERY,
});
