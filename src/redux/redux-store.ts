import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import {AllActionType} from "./store";
import thunkMiddleware from "redux-thunk"

export type dispatchType = (action: AllActionType) => void



let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});


let store = createStore(reducers,applyMiddleware(thunkMiddleware));


// @ts-ignore
window.store = store;

export default store;