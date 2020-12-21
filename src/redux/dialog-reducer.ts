import {AllActionTypes, imgObj, MessagePageType, MessageType} from "./store";


const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const CHANGE_NEW_MESSAGE = "CHANGE-NEW-MESSAGE";


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


const dialogReducer = (state: MessagePageType = initialState, action: AllActionTypes) => {
    if (action.type === ADD_NEW_MESSAGE) {
        const newMessageDia: MessageType = {
            id: 7,
            message: state.newMessageText
        };
        let stateCopy = {...state};
        stateCopy.messageDate= [...state.messageDate];
        stateCopy.messageDate.push(newMessageDia);
        stateCopy.newMessageText = "";
        return  stateCopy

    } else if (action.type === CHANGE_NEW_MESSAGE) {
        let stateCopy = {...state};
        stateCopy.newMessageText = action.newMessage;
        return stateCopy
    }

    return state
};

export default dialogReducer;