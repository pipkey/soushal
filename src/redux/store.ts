import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";

export const imgObj = {
    img1: "https://www.meme-arsenal.com/memes/8c4efb9bdbe32514cd7b64ec5e2e1fd1.jpg",
    img2: "https://instaved.ru/wp-content/uploads/2019/11/kartinki-na-instagram-na-avu_GLAV.jpg",
    img3: "https://proprikol.ru/wp-content/uploads/2020/04/kartinki-dlya-vajbera-na-avu-3.jpg",
    img4: "https://klike.net/uploads/posts/2019-03/1551596697_5.jpg",
    img5: "https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg"
};
export type RootStateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    sidebar: SidebarType
}
export type ProfilePageType = {
    postsDate: Array<PostType>
    newPostText: string
}
export type MessagePageType = {
    messageDate: Array<MessageType>
    dialogsDate: Array<DialogType>
    newMessageText: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
    img: string
}
export type PostType = {
    id: number
    message: string
    likeCounts: number
}
export type SidebarType = {}

export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscriber: any
    getState: () => RootStateType
    dispatch: (action: AllActionTypes) => void
}

// AC type bind
const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const CHANGE_NEW_MESSAGE = "CHANGE-NEW-MESSAGE";

//Types of action
export type AllActionTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof ChangePostAC> |
    ReturnType<typeof NewMessageAC> |
    ReturnType<typeof ChangeMessageAC>

// Action Creators
export const addPostAC = () => ({type: ADD_POST} as const);
export const ChangePostAC = (newText: string) => ({type: CHANGE_POST_TEXT, newText: newText} as const);
export const NewMessageAC = () => ({type: ADD_NEW_MESSAGE} as const);
export const ChangeMessageAC = (newMessage: string) => (
    {type: CHANGE_NEW_MESSAGE, newMessage: newMessage} as const);


// STORE

// //store function
//     getState() {
//         return this._state;
//     },
//
//     _onChange() {
//         console.log("state was changed")
//     },
//
//     // subscriber(observ) {
//     //    this._onChange = observ
//     // },
//
//     dispatch(action) {
//
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.messagePage = dialogReducer(this._state.messagePage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//         this._onChange();
//     }
// };
//
//
// export default store;


// const store: StoreType = {
//     _state: {
//         profilePage: {
//
//             postsDate: [
//                 {id: 1, message: "Hi, how are you?", likeCounts: 35},
//                 {id: 2, message: "It's my first Post", likeCounts: 74},
//                 {id: 3, message: "Жыве Беларусь", likeCounts: 3000000},
//                 {id: 4, message: "go home", likeCounts: 22},
//                 {id: 5, message: "we live in your dream", likeCounts: 11}
//             ],
//
//             newPostText: "hello my dear friends"
//         },
//
//         messagePage: {
//
//             dialogsDate: [
//                 {id: 1, name: "Phil", img: imgObj.img1},
//                 {
//                     id: 2,
//                     name: "Sergo",
//                     img: imgObj.img2
//                 },
//                 {
//                     id: 3,
//                     name: "Pavel",
//                     img: imgObj.img3
//                 },
//                 {
//                     id: 4, name: "Denis", img: imgObj.img4
//                 },
//                 {id: 5, name: "Victor", img: imgObj.img5},
//             ],
//             messageDate: [
//                 {id: 1, message: "Hello"},
//                 {id: 2, message: "Go eat Shkvarky"},
//                 {id: 3, message: "well done"},
//                 {id: 4, message: "beer?"},
//                 {id: 5, message: "we will go to cinema"}
//             ],
//
//             newMessageText: ""
//         },
//
//         sidebar: {}
//     },
//
//