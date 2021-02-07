import React from "react";
import { MessagePageType, RootStateType} from "../../../redux/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {NewMessage, ChangeMessage} from "../../../redux/dialog-reducer";

//Types container
// type MapDisType = {
//     addMessage: () => void
//     onChangeMessage: (value: string) => void
// };
type MapStateType = {
    messagePage: MessagePageType
    newMessage: string
};

let mapStateToProps = (state: RootStateType): MapStateType => {
    return {
        messagePage: state.messagePage,
        newMessage: state.messagePage.newMessageText
    }
};

// let mapDispatchToProps = (dispatch: dispatchType): MapDisType => {
//     return {
//         addMessage: () => {
//             dispatch(NewMessageAC())
//         },
//         onChangeMessage: (value: string) => {
//             dispatch(ChangeMessageAC(value))
//         }
//     }
// };

const DialogsContainer = connect(mapStateToProps, {
  NewMessage, ChangeMessage
})(Dialogs);


export default DialogsContainer;