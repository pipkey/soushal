import {AllActionTypes, AuthDataType, SET_USER_DATA} from "./store";

let initialState: AuthDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};


const authReducer = (state: AuthDataType = initialState, action: AllActionTypes) => {

    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth:true
            };

        default:
            return state
    }
};


    export default authReducer;