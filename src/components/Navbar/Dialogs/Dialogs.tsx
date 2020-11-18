import React from "react";
import ss from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";

export type DialogPropsType = {
    name: string,
    id: number
}

export type MessageDatePropsType ={
    id:number,
    message: string
}



export type MainDialogsPropsType ={
    dialogsDate: Array<DialogPropsType>
    messageDate: Array<MessageDatePropsType>
}


const Dialogs = (props:MainDialogsPropsType) => {





    let dialogsElement = props.dialogsDate.map(dialog => < DialogItem id={dialog.id} name={dialog.name}/>);

    let messageElement = props.messageDate.map(message => < Message message={message.message}/>);

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