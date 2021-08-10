import { actionTypes } from '../constants/actionTypes';

export const getUserDetails = () => {
    return ({
        type: actionTypes.GET_USER_DETAILS
    })
}

export const editUserDetails = (userDetails) => {
    return ({
        type: actionTypes.EDIT_USER_DETAILS,
        payload: userDetails
    })
}