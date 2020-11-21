import React from "react";
import ss from "./../Dialogs.module.css"


type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {

    return (

            <div className={ss.message}>
                {props.message}
            </div>
         )
};


export default Message;