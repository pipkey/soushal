import React, {ChangeEvent} from "react";
import ss from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {MessagePageType} from "../../../redux/store";


type MessagePropsType = {
    messagePage: MessagePageType
    newMessage:string
    addMessage:()=>void
    onChangeMessage:(value:string)=>void
}


const Dialogs = (props: MessagePropsType) => {

    let dialogsElement = props.messagePage.dialogsDate.map(dialog => < DialogItem id={dialog.id}
                                                                                  name={dialog.name}
                                                                                  img={dialog.img}/>);
    let messageElement = props.messagePage.messageDate.map(message => <Message key={message.id}
                                                                               message={message.message}/>);


    const addMessage = () => {
        props.addMessage()
    };
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value;
       props.onChangeMessage(newMessage)
    };


    return (
        <div className={ss.dialogs}>

            <div className={ss.dialogsItems}>
                {dialogsElement}

            </div>
            <div className={ss.messages}>
                {messageElement}
                <div>
                    <textarea
                        onChange={onChangeMessage}
                        value={props.newMessage}
                    />
                    <button onClick={addMessage}> add</button>
                </div>
            </div>
        </div>
    )
};


export default Dialogs;