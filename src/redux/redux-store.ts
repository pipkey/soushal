import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import {AllActionTypes} from "./store";
import usersReducer from "./users-reducer";


export type dispatchType = (action: AllActionTypes) => void

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});


let store = createStore(reducers);


// window.store = store

export default store;