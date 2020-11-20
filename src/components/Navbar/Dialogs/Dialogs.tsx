import React from "react";
import ss from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {MessagePageType} from "../../../redux/state";


type MessagePropsType = {
    messagePage: MessagePageType
}


const Dialogs = (props: MessagePropsType) => {
    debugger;
    let dialogsElement = props.messagePage.dialogsDate.map(dialog => < DialogItem id={dialog.id}
                                                                                  name={dialog.name}/>);

    let messageElement = props.messagePage.messageDate.map(message => <Message key={message.id}
                                                                               message={message.message}/>);

    return (
        <div className={ss.dialogs}>

            <div className={ss.dialogsItems}>
                {dialogsElement}

            </div>
            <div className={ss.messages}>
                {messageElement}
            </div>
        </div>
    )
};


export default Dialogs;