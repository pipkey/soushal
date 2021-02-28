import React, {ChangeEvent} from "react";
import ss from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {MessagePageType} from "../../../redux/store";
import {reduxForm, Field, InjectedFormProps} from "redux-form";


type MessagePropsType = {
    messagePage: MessagePageType
    newMessage: string
    NewMessage: (newMessage: string) => void
    isAuth: boolean
}


const Dialogs = (props: MessagePropsType) => {

    let dialogsElement = props.messagePage.dialogsDate.map(dialog => < DialogItem id={dialog.id}
                                                                                  name={dialog.name}
                                                                                  img={dialog.img}/>);
    let messageElement = props.messagePage.messageDate.map(message => <Message key={message.id}
                                                                               message={message.message}/>);


    const AddNewMBody = (value: AddMessageFormType) => {
        props.NewMessage(value.newMessage);
        // alert(value.newMessage)
    };

    return (
        <div className={ss.dialogs}>

            <div className={ss.dialogsItems}>
                {dialogsElement}

            </div>
            <div className={ss.messages}>
                {messageElement}
            </div>
            <AddMessageFormRedux onSubmit={AddNewMBody}/>
        </div>
    )
};

type AddMessageFormType = {
    newMessage: string
}

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {

    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessage"} placeholder={"enter your message"}/>
                <button> Send</button>
            </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: "dialogAddMessageForm"})(AddMessageForm);


export default Dialogs;