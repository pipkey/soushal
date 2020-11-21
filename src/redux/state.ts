

export type RootStateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    sidebar: SidebarType
}

export type ProfilePageType = {
    postsDate: Array<PostType>

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

    },
    messagePage: {

        dialogsDate: [
            {id: 1, name: "Phil", img:"https://lh3.googleusercontent.com/proxy/oMztHyk19V7h56bc8Vg0IP6gCK2-ACdJvZPUWgoeG59LO-bajikKgCDYMq_T22uqm7qgnqFwGp7lH-Ue9-epcGxi_C-XVQMj-rOKG0o7RMSeURcH5fVYr0X4S1A1OzEqbhMoISaCVsM"},
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
    debugger;
    const newPost: PostType ={
        id: 5,
        message:postMessage,
        likeCounts:0
    };

    state.profilePage.postsDate.push(newPost)
};


export default state