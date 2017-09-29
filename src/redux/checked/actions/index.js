import {
    ADD_CHECK,
    DELETE_CHECK
} from '../constants';

/*
// adds a given id to the checked set
*/
export const addCheck = (id) => ({
    id,
    type: ADD_CHECK
})

/*
// removed a given id from the checked set
*/
export const deleteCheck = (id) => ({
    id,
    type: DELETE_CHECK
})
