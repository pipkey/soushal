import React from "react";
import ss from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {MessagePageType, SidebarType} from "../../../redux/state";


type MessagePropsType = {
    messagePage: MessagePageType
    sidebar: SidebarType
}


const Dialogs = (props: MessagePropsType) => {

    let dialogsElement = props.messagePage.dialogsDate.map(dialog => < DialogItem id={dialog.id}
                                                                                  name={dialog.name}
                                                                                  img={dialog.img}/>);

    let messageElement = props.messagePage.messageDate.map(message => <Message key={message.id}
                                                                               message={message.message}/>);


    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    const addMessage = () => {
        let mess = newMessageElement.current?.value;
        alert(mess)
    };



    return (
        <div className={ss.dialogs}>

            <div className={ss.dialogsItems}>
                {dialogsElement}

            </div>
            <div className={ss.messages}>
                {messageElement}
                <div>
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={addMessage}> add</button>
                </div>
            </div>
        </div>
    )
};


export default Dialogs;