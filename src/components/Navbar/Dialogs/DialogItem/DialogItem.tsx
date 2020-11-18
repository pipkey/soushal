import React from "react";
import ss from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogPropsType} from "../Dialogs";



const DialogItem = (props: DialogPropsType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={ss.dialog + " " + ss.active}>
            <NavLink to={path} activeClassName={ss.active}>{props.name}</NavLink>
        </div>
    )
};


export default DialogItem;