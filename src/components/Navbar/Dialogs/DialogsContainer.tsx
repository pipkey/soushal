import React from "react";
import {MessagePageType, RootStateType} from "../../../redux/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {NewMessage, ChangeMessage} from "../../../redux/dialog-reducer";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";


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

export default withAuthRedirect(connect(mapStateToProps, {NewMessage, ChangeMessage})(Dialogs));


