import {ProfilePageType} from "./store";
import {ProfileType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

// AC type bind
export const ADD_POST = "ADD-POST";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_USER_STATUS = "SET_USER_STATUS";
export const DELETE_POST = "DELETE_POST";


//Profile Action Types

export type ProfileActionType =
    ReturnType<typeof addPost> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setUserStatus> |
    ReturnType<typeof deletePost>

//END Profile Action Types

let InitialState: ProfilePageType = {

    postsDate: [
        {id: 1, message: "Hi, how are you?", likeCounts: 35},
        {id: 2, message: "It's my first Post", likeCounts: 74},
        {id: 3, message: "beer?", likeCounts: 3000000},
        {id: 4, message: "go home", likeCounts: 22},
        {id: 5, message: "we live in your dream", likeCounts: 11}
    ],
    // newPostText: "hello my dear friends",
    profile: {} as ProfileType,
    status: ""
};


const profileReducer = (state: ProfilePageType = InitialState, action: ProfileActionType) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsDate:
                    [...state.postsDate, {id: 5, message: action.post, likeCounts: 0}]
            };
        case SET_USER_STATUS:
            return {...state, status: action.status};
        case DELETE_POST:
            return {...state, postsDate: state.postsDate.filter(p => p.id !== action.id)};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        default:
            return state
    }
};

// Action Creators

export const addPost = (post: string) => ({type: ADD_POST, post} as const);
export const deletePost = (id: number) => ({type: DELETE_POST, id} as const);
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const);
export const setUserStatus = (status: string) => ({type: SET_USER_STATUS, status} as const);

// end Action Creators

//Thunks
export const getUserProfile = (id: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.setUserProfile(id);

    dispatch(setUserProfile(response.data));

};
export const getStatus = (id: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(id);

    dispatch(setUserStatus(response.data));
};
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0)
        dispatch(setUserStatus(status));
};


export default profileReducer;