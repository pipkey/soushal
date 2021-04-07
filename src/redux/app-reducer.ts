import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./redux-store";
import {setDataUserThunk} from "./auth-reducer";


// AC type bind
export const SET_INITIALIZED = "SET_INITIALIZED";


//Profile Action Types
export type AuthActionType =
    ReturnType<typeof initializedSuccess>


//types
type ThunkType = ThunkAction<void, AppRootStateType, unknown, AuthActionType>
export type AppInitialStateType = typeof initialState

let initialState = {
    initializedSuc: false
};


const appReducer = (state: AppInitialStateType = initialState, action: AuthActionType) => {

    switch (action.type) {
        case  SET_INITIALIZED : {
            return {...state, initializedSuc: true}
        }
        default :
            return state
    }
};


// Action Creators
export const initializedSuccess = () => ({type: SET_INITIALIZED} as const);


//thunk
export const initializeApp = ():ThunkType => (dispatch) => {
    let promise = dispatch(setDataUserThunk());
    promise.then(() => {
        dispatch(initializedSuccess())
    });
};

export default appReducer;