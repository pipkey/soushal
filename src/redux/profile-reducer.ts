import {PostType} from "./state";


const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";


const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        const newPost: PostType = {
            id: 5,
            message: state.newPostText,
            likeCounts: 0
        };
        state.postsDate.push(newPost);
        state.newPostText = "";
    } else if (action.type === CHANGE_POST_TEXT) {
        state.newPostText = action.newText;
    } else
        return state
};