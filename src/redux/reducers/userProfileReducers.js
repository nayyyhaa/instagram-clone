import { actionTypes } from "../constants/actionTypes";
import UserImg from './../../assets/images/user.jpg';

const initialState = {
    userDetails: [
        {
            name: "Neha Gupta", 
            username: "nayyyhaa", 
            bio: "Through my lens.",
            userImg: UserImg
        }
    ]
}

const userReducer = (state, action) => {
    let {type, payload} = action;
    state = {...initialState};
    switch(type) {
        case actionTypes.GET_USER_DETAILS: return state;
        case actionTypes.EDIT_USER_DETAILS: return payload;
        default: return state;
    }
}

export default userReducer;