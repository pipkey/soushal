import React from "react";
import ss from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {MessagePageType} from "../../../redux/store";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Textarea} from "../../FormsControls/FormsConrollers";
import {required, maxLengthCreator} from "../../../utills/validators/validators";


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
const maxLength30 = maxLengthCreator(30);

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={"newMessage"}
                       placeholder={"enter your message"}
                       validate ={[
                           required, maxLength30
                       ]}
                />
                <button> Send</button>
            </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: "dialogAddMessageForm"})(AddMessageForm);


export default Dialogs;