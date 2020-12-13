import {AllActionTypes, MessageType, RootStateType} from "./state";


const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const CHANGE_NEW_MESSAGE = "CHANGE-NEW-MESSAGE";


const dialogReducer = (state:any, action:AllActionTypes) => {
     if (action.type === ADD_NEW_MESSAGE) {
        const newMessageDia: MessageType = {
            id: 7,
            message: state.newMessageText
        };
         state.messageDate.push(newMessageDia);
         state.newMessageText = "";

    } else if (action.type === CHANGE_NEW_MESSAGE) {
         state.messagePage.newMessageText = action.newMessage;

    }
    return state
};

export default dialogReducer;