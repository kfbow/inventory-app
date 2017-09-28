import {
    ADD_CHECKED,
    CLEAR_CHECKED,
    EDIT_FIELD,
    REMOVE_CHECKED,
    SET_DATA,
    SET_ITEMS_PER_PAGE,
    SET_PAGE_AMOUNT,
    SET_PAGE_NUMBER,
    SET_SORT
} from '../constants';

export const setData = (data) => ({
    data,
    type: SET_DATA
})

export const setItemsPerPage = (items) => ({
    items,
    type: SET_ITEMS_PER_PAGE,
});

export const setPageNumber = (page) => ({
    page,
    type: SET_PAGE_NUMBER,
});

export const setPageAmount = (amount) => ({
    amount,
    type: SET_PAGE_AMOUNT,
});

export const setSort = (name, order) => ({
    name,
    order,
    type: SET_SORT
})

export const addChecked = (id) => ({
    id,
    type: ADD_CHECKED
})

export const clearChecked = () => ({
    type: CLEAR_CHECKED
})

export const removeChecked = (id) => ({
    id,
    type: REMOVE_CHECKED
})

export const editField = (id, name, value) => ({
    id,
    name,
    type: EDIT_FIELD,
    value
})
