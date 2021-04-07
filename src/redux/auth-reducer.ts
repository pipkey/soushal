import {headerAPI} from "../api/api";
import {Dispatch} from "redux";
import {FormDataType} from "../components/Login/Login";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./redux-store";
import {stopSubmit} from "redux-form";


// AC type bind
export const SET_USER_DATA = "SET_USER_DATA";


//Profile Action Types
export type AuthActionType =
    ReturnType<typeof setUserData>


//types
type ThunkType = ThunkAction<void, AppRootStateType, unknown, AuthActionType>
export type AuthInitialStateType = typeof initialState

let initialState = {
    id: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false
};


const authReducer = (state: AuthInitialStateType = initialState, action: AuthActionType) => {

    switch (action.type) {
        case  SET_USER_DATA : {
            return {
                ...state, ...action.payload
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
export const setDataUserThunk = () => async (dispatch: Dispatch) => {
    let response = await headerAPI.setDataUser();

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setUserData(id, email, login, true))
    }
};
export const LoginThunk = (formData: FormDataType): ThunkType => async (dispatch: ThunkDispatch<AppRootStateType, unknown, any>) => {
    let res = await headerAPI.login(formData)
    if (res.data.resultCode === 0) {
        dispatch(setDataUserThunk())
    } else {
        let message = res.data.messages.length > 0 ? res.data.messages[0] : "some error";
        dispatch(stopSubmit("Login", {_error: message}));
    }
};


export const LogOutThunk = () => async (dispatch: Dispatch<any>) => {
    let response = await headerAPI.logOut();

    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
        // dispatch(setDataUserThunk())
    }
};


export default authReducer;