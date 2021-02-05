import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import {AllActionTypes} from "./store";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


export type dispatchType = (action: AllActionTypes) => void

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});


let store = createStore(reducers);


// @ts-ignore
window.store = store;

export default store;