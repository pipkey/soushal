import {ADD_POST, AllActionTypes, CHANGE_POST_TEXT, ProfilePageType, SET_USER_PROFILE} from "./store";
import {ProfileType} from "../components/Profile/ProfileContainer";


let InitialState: ProfilePageType = {

    postsDate: [
        {id: 1, message: "Hi, how are you?", likeCounts: 35},
        {id: 2, message: "It's my first Post", likeCounts: 74},
        {id: 3, message: "Жыве Беларусь", likeCounts: 3000000},
        {id: 4, message: "go home", likeCounts: 22},
        {id: 5, message: "we live in your dream", likeCounts: 11}
    ],
    newPostText: "hello my dear friends",
    profile: {} as ProfileType
};


const profileReducer = (state: ProfilePageType = InitialState, action: AllActionTypes) => {

    switch (action.type) {
        case ADD_POST:
            return {...state, newPostText: "",
                postsDate:
                    [...state.postsDate, {id: 5, message: state.newPostText, likeCounts: 0}]
            };
        case CHANGE_POST_TEXT:
            return {...state, newPostText: action.newText};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        default:
            return state
    }
};



export default profileReducer;