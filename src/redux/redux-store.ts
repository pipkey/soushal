import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import {
    addPostAC,
    ChangeMessageAC,
    ChangePostAC,
    MessagePageType,
    NewMessageAC,
    ProfilePageType,
    SidebarType
} from "./store";


export type RootStore = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    sidebar: SidebarType
}

export type actionType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof ChangePostAC> |
    ReturnType<typeof NewMessageAC> |
    ReturnType<typeof ChangeMessageAC>

export type dispatchType = (action: actionType) => void

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogReducer,
    sidebar: sidebarReducer,
});


let store = createStore(reducers);


// window.store = store

export default store;