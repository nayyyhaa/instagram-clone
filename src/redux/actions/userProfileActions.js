import { actionTypes } from '../constants/actionTypes';

export const setUserDetails = (userDetails) => {
    return ({
        type: actionTypes.SET_USER_DETAILS,
        payload: userDetails
    })
}

export const editUserDetails = (userDetails) => {
    return ({
        type: actionTypes.EDIT_USER_DETAILS,
        payload: userDetails
    })
}