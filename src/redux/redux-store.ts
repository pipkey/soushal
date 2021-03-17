import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form:formReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;


export default store;