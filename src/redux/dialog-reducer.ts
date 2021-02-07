import {imgObj, MessagePageType} from "./store";

// AC type bind
export const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
export const CHANGE_NEW_MESSAGE = "CHANGE-NEW-MESSAGE";

// Action Creators
export const NewMessage = () => ({type: ADD_NEW_MESSAGE} as const);
export const ChangeMessage = (newMessage: string) => (
    {type: CHANGE_NEW_MESSAGE, newMessage: newMessage} as const);

// end Action Creators

//Profile Action Types

export type DialogActionType =
    ReturnType<typeof NewMessage> |
    ReturnType<typeof ChangeMessage>


//END Profile Action Types

let initialState: MessagePageType = {

    dialogsDate: [
        {id: 1, name: "Phil", img: imgObj.img1},
        {
            id: 2,
            name: "Sergo",
            img: imgObj.img2
        },
        {
            id: 3,
            name: "Pavel",
            img: imgObj.img3
        },
        {
            id: 4, name: "Denis", img: imgObj.img4
        },
        {id: 5, name: "Victor", img: imgObj.img5},
    ],
    messageDate: [
        {id: 1, message: "Hello"},
        {id: 2, message: "Go eat Shkvarky"},
        {id: 3, message: "well done"},
        {id: 4, message: "beer?"},
        {id: 5, message: "we will go to cinema"}
    ],

    newMessageText: ""
};


const dialogReducer = (state: MessagePageType = initialState, action: DialogActionType ) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: "",
                messageDate: [...state.messageDate,
                    {id: 7, message: state.newMessageText}
                ]
            };
        case CHANGE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.newMessage
            };
    }
    return state
};



export default dialogReducer;