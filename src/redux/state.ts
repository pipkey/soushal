export type RootStateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
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
}
export type PostType = {
    id: number
    message: string
    likeCounts: number
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
            {id: 1, name: "Phil"},
            {id: 2, name: "Sergo"},
            {id: 3, name: "Pavel"},
            {id: 4, name: "Denis"},
            {id: 5, name: "Victor"},
        ],
        messageDate: [
            {id: 1, message: "Hello"},
            {id: 2, message: "Go eat Shkvarky"},
            {id: 3, message: "well done"},
            {id: 4, message: "beer?"},
            {id: 5, message: "we will go to cinema"}
        ]
    }
};


export default state