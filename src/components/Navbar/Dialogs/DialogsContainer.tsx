import React from "react";
import {MessagePageType} from "../../../redux/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {NewMessage} from "../../../redux/dialog-reducer";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";
import {AppRootStateType} from "../../../redux/redux-store";


//Types container

type MapStateType = {
    messagePage: MessagePageType
};

let mapStateToProps = (state: AppRootStateType): MapStateType => {
    return {
        messagePage: state.messagePage
    }
};


export default compose<React.ComponentType>(connect(mapStateToProps, {NewMessage}),
    withAuthRedirect )(Dialogs);



