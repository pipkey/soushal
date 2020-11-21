import React from "react";
import ss from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import {DialogType} from "../../redux/state";


type NavbarPropsType = {
    dialogsDate: Array<DialogType>
}

const NavBar = (props: NavbarPropsType) => {

    return (
        <nav className={ss.nav}>
            <div className={ss.item}>
                <NavLink to="/profile" activeClassName={ss.active}>Profile</NavLink>
            </div>
            <div className={`${ss.item} ${ss.active}`}>
                <NavLink to="/dialogs" activeClassName={ss.active}>Messages</NavLink>
            </div>
            <div className={ss.item}>
                <NavLink to="/news" activeClassName={ss.active}>News</NavLink>
            </div>
            <div className={ss.item}>
                <NavLink to="/music" activeClassName={ss.active}>Music</NavLink>
            </div>
            <div className={ss.item}>
                <NavLink to="/settings" activeClassName={ss.active}>Settings</NavLink>
            </div>
            <div className={ss.item}>
                <NavLink to="/friends" activeClassName={ss.active}>Friends
                    <div className={ss.ava_friends}>
                        {props.dialogsDate.map(im => <img src={im.img}/>)}
                    </div>
                </NavLink>
            </div>

        </nav>
    )
};


export default NavBar;