import {PostType, RootStateType, AllActionTypes} from "./state";


const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";


const profileReducer = (state:any, action:AllActionTypes) => {
    if (action.type === ADD_POST) {
        const newPost: PostType = {
            id: 5,
            message: state.profilePage.newPostText,
            likeCounts: 0
        };
        state.profilePage.postsDate.push(newPost);
        state.profilePage.newPostText = "";
    } else if (action.type === CHANGE_POST_TEXT) {
        state.profilePage.newPostText = action.newText;
    } else
        return state
};

export default profileReducer;