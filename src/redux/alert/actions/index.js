import {
    NEW_ALERT
} from '../constants';

export const newAlert = (message) => ({
    message,
    type: NEW_ALERT,
});

// export const newAlert = (message) => {
//     return dispatch => {
//         dispatch(setAlert(message));
//         setTimeout(() => {
//             dispatch(setAlert(''));
//         }, 3000);
//     };
// }
