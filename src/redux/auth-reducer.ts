import {headerAPI} from "../api/api";
import {Dispatch} from "redux";
import {FormDataType} from "../components/Login/Login";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./redux-store";


// AC type bind
export const SET_USER_DATA = "SET_USER_DATA";


//Profile Action Types
export type AuthActionType =
    ReturnType<typeof setUserData>


//types
type ThunkType = ThunkAction<void, AppRootStateType, unknown, AuthActionType>

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
        case  SET_USER_DATA : {
            return {
                ...state, ...action.payload, isAuth: true
            }
        }
        default :
            return state
    }
};


// Action Creators
export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
} as const);


//thunk
export const setDataUserThunk = () => (dispatch: Dispatch) => {
    headerAPI.setDataUser()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setUserData(id, email, login, true))
            }
        })

};
export const LoginThunk = (formData: FormDataType):ThunkType => (dispatch: Dispatch<any>) => {
    headerAPI.login(formData)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setDataUserThunk())
            }
        })

};


export const LogOutThunk = (): ThunkType => (dispatch) => {
    headerAPI.logOut()
        .then(response => {
            if (response.data.resultCode === 0) {
                 dispatch(setUserData(null, null, null, false));
                // dispatch(setDataUserThunk())
            }
        })

};


export default authReducer;