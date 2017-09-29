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
import axios from 'axios';
import { BASE_URL } from 'config/globals';
import { setAlert } from 'redux/alert/actions';

/*
// sets the specific field data in the state
*/
export const editField = (id, name, value) => ({
    id,
    name,
    type: EDIT_FIELD,
    value
})

/*
// fetches the remote data
*/
export const fetchData = () => {
    return dispatch => {
        axios
            .get(`${BASE_URL}/products`)
            .then((res) => dispatch(setData(fromJS(res.data))))
            .catch((err) => dispatch(setAlert(err)))
    }
}

/*
// puts the data of a single product given an ID and data. Example:
//
// {
//   "name": "Red Shoes",
//   "price": 1.1,
//   "inventory": 11
// }
*/
export const putProduct = (id, data) => {
    return dispatch => {
        axios({
            method: 'put',
            url: `${BASE_URL}/product/${id}`,
            data: {
                "name": data.name,
                "price": data.price,
                "inventory": data.inventory
            }
        });
    }
}

/*
// sets the data to state
*/
const setData = (data) => ({
    data,
    type: SET_DATA
})

/*
// sets the pageAmount to state
*/
export const setPageAmount = (pages) => ({
    pages,
    type: SET_PAGE_AMOUNT
})

/*
// sets the pageNumber to state
*/
export const setPageNumber = (page) => ({
    page,
    type: SET_PAGE_NUMBER
})

/*
// sets the amount of items to be shown per page
*/
export const setPerPage = (amount) => ({
    amount,
    type: SET_PER_PAGE
})

/*
// sets the search query to state
*/
export const setQuery = (query) => ({
    query,
    type: SET_QUERY
})

/*
// sets the sort params to state
*/
export const setSort = (name, order) => ({
    name,
    order,
    type: SET_SORT
})
