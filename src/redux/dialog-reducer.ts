import {MessageType, PostType} from "./state";


const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const CHANGE_NEW_MESSAGE = "CHANGE-NEW-MESSAGE";


const dialogReducer = (state, action) => {
     if (action.type === ADD_NEW_MESSAGE) {
        const newMessageDia: MessageType = {
            id: 7,
            message: this._state.messagePage.newMessageText
        };
        this._state.messagePage.messageDate.push(newMessageDia);
        this._state.messagePage.newMessageText = "";
        this._onChange()
    } else if (action.type === CHANGE_NEW_MESSAGE) {
        this._state.messagePage.newMessageText = action.newMessage;
        this._onChange()
    }
    return state
};