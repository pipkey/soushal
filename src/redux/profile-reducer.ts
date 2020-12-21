import {AllActionTypes, PostType, ProfilePageType} from "./store";


const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";


let InitialState: ProfilePageType = {

    postsDate: [
        {id: 1, message: "Hi, how are you?", likeCounts: 35},
        {id: 2, message: "It's my first Post", likeCounts: 74},
        {id: 3, message: "Жыве Беларусь", likeCounts: 3000000},
        {id: 4, message: "go home", likeCounts: 22},
        {id: 5, message: "we live in your dream", likeCounts: 11}
    ],

    newPostText: "hello my dear friends"
};


const profileReducer = (state: ProfilePageType = InitialState, action: AllActionTypes) => {

    if (action.type === ADD_POST) {
        const newPost: PostType = {
            id: 5,
            message: state.newPostText,
            likeCounts: 0
        };
        let stateCopy = {...state};
        stateCopy.postsDate = [...state.postsDate];
        stateCopy.postsDate.push(newPost);
        stateCopy.newPostText = "";
        return stateCopy
    } else if (action.type === CHANGE_POST_TEXT) {
       let stateCopy = {...state};
        stateCopy.newPostText = action.newText;
        return stateCopy
    } else
        return state
};

export default profileReducer;