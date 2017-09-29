import { SET_ALERT } from '../constants';

/*
// set the alert message in state
*/
const newAlert = (message) => ({
    message,
    type: SET_ALERT
})

export const setAlert = (message) => {
    return dispatch => {
        dispatch(newAlert(message));
        setTimeout(() => {
            dispatch(newAlert(''));
        }, 3000);
    };
}
