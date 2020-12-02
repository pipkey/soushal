import {rerenderEntireTree} from "../render";


export type RootStateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    sidebar: SidebarType
}
export type ProfilePageType = {
    postsDate: Array<PostType>
    newPostText:string
}
export type MessagePageType = {
    messageDate: Array<MessageType>
    dialogsDate: Array<DialogType>
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
export type SidebarType = {

}
let state: RootStateType = {
    profilePage: {

        postsDate: [
            {id: 1, message: "Hi, how are you?", likeCounts: 35},
            {id: 2, message: "It's my first Post", likeCounts: 74},
            {id: 3, message: "Жыве Беларусь", likeCounts: 3000000},
            {id: 4, message: "go home", likeCounts: 22},
            {id: 5, message: "we live in your dream", likeCounts: 11}
        ],
        newPostText: "hello my dear friends"
    },
    messagePage: {

        dialogsDate: [
            {id: 1, name: "Phil", img:"https://www.meme-arsenal.com/memes/8c4efb9bdbe32514cd7b64ec5e2e1fd1.jpg"},
            {id: 2, name: "Sergo", img:"https://instaved.ru/wp-content/uploads/2019/11/kartinki-na-instagram-na-avu_GLAV.jpg"},
            {id: 3, name: "Pavel", img:"https://proprikol.ru/wp-content/uploads/2020/04/kartinki-dlya-vajbera-na-avu-3.jpg"},
            {id: 4, name: "Denis", img:"https://klike.net/uploads/posts/2019-03/1551596697_5.jpg"},
            {id: 5, name: "Victor", img:"https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg"},
        ],
        messageDate: [
            {id: 1, message: "Hello"},
            {id: 2, message: "Go eat Shkvarky"},
            {id: 3, message: "well done"},
            {id: 4, message: "beer?"},
            {id: 5, message: "we will go to cinema"}
        ]
    },

    sidebar: {

    }
};

export const addPost =(postMessage:string)=>{

    const newPost: PostType ={
        id: 5,
        message:postMessage,
        likeCounts:0
    };

    state.profilePage.postsDate.push(newPost);
    rerenderEntireTree(state)
};
export const ChangePostText =(newText:string)=>{

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
};



export default state