import {headerAPI} from "../api/api";
import {Dispatch} from "redux";


// AC type bind
export const SET_USER_DATA = "SET_USER_DATA";


//Profile Action Types
export type AuthActionType =
    ReturnType<typeof setUserData>


//types
export type AuthDataType = {
    id?: number | null
    email?: string | null
    login: string | null
    isAuth: boolean
}


let initialState: AuthDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};


const authReducer = (state: AuthDataType = initialState, action: AuthActionType) => {

    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth: true
            };

        default:
            return state
    }
};


// Action Creators
export const setUserData = (id: number | null, email: string | null, login: string | null) => ({
    type: SET_USER_DATA,
    data: {id, email, login}
} as const);


//thunk
export const setDataUser = () => (dispatch: Dispatch) => {
        headerAPI.setDataUser()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                   dispatch(setUserData(id, email, login))
                }
            })

    }


export default authReducer;