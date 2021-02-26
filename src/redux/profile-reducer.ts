import {ProfilePageType} from "./store";
import {ProfileType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

// AC type bind
export const ADD_POST = "ADD-POST";
export const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_USER_STATUS = "SET_USER_STATUS";


//Profile Action Types

export type ProfileActionType =
    ReturnType<typeof addPost> |
    ReturnType<typeof ChangePost> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setUserStatus>

//END Profile Action Types

let InitialState: ProfilePageType = {

    postsDate: [
        {id: 1, message: "Hi, how are you?", likeCounts: 35},
        {id: 2, message: "It's my first Post", likeCounts: 74},
        {id: 3, message: "Жыве Беларусь", likeCounts: 3000000},
        {id: 4, message: "go home", likeCounts: 22},
        {id: 5, message: "we live in your dream", likeCounts: 11}
    ],
    newPostText: "hello my dear friends",
    profile: {} as ProfileType,
    status: ""
};


const profileReducer = (state: ProfilePageType = InitialState, action: ProfileActionType) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state, newPostText: "",
                postsDate:
                    [...state.postsDate, {id: 5, message: state.newPostText, likeCounts: 0}]
            };
        case CHANGE_POST_TEXT:
            return {...state, newPostText: action.newText};
        case SET_USER_STATUS:
            return {...state, status: action.status};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        default:
            return state
    }
};

// Action Creators

export const addPost = () => ({type: ADD_POST} as const);
export const ChangePost = (newText: string) => ({type: CHANGE_POST_TEXT, newText: newText} as const);
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const);
export const setUserStatus = (status: string) => ({type: SET_USER_STATUS, status} as const);

// end Action Creators

//Thunks
export const getUserProfile = (id: string) => (dispatch: Dispatch) => {
    profileAPI.setUserProfile(id)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
};
export const getStatus= (id: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(id)
        .then(response => {
            dispatch(setUserStatus(response.data));
        })
};
export const updateStatus= (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0)
            dispatch(setUserStatus(status));
        })
};


export default profileReducer;