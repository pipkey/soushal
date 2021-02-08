import React from "react";
import {MessagePageType, RootStateType} from "../../../redux/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {NewMessage, ChangeMessage} from "../../../redux/dialog-reducer";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";


//Types container

type MapStateType = {
    messagePage: MessagePageType
    newMessage: string

};

let mapStateToProps = (state: RootStateType): MapStateType => {
    return {
        messagePage: state.messagePage,
        newMessage: state.messagePage.newMessageText,

    }
};



export default compose<React.ComponentType>(connect(mapStateToProps, {NewMessage, ChangeMessage}),
    withAuthRedirect )(Dialogs);



