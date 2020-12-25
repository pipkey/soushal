import React from "react";
import ss from "./Navbar.module.css"
import {NavLink} from "react-router-dom";


const NavBar = () => {

    return (
        <nav className={ss.nav}>
            <div className={ss.item}>
                <NavLink to="/profile" activeClassName={ss.active}>Profile</NavLink>
            </div>
            <hr/>
            <div className={ss.item}>
                <NavLink to="/dialogs" activeClassName={ss.active}>Messages</NavLink>
            </div>
            <hr/>
            <div className={ss.item}>
                <NavLink to="/news" activeClassName={ss.active}>News</NavLink>
            </div>
            <hr/>
            <div className={ss.item}>
                <NavLink to="/music" activeClassName={ss.active}>Music</NavLink>
            </div>
            <hr/>
            <div className={ss.item}>
                <NavLink to="/users" activeClassName={ss.active}>Users</NavLink>
            </div>
            <hr/>
            <div className={ss.item}>
                <NavLink to="/settings" activeClassName={ss.active}>Settings</NavLink>
            </div>
            <hr/>
            <div className={ss.item}>
                <NavLink to="/friends" activeClassName={ss.active}>Friends</NavLink>
            </div>
            <hr/>

        </nav>
    )
};


export default NavBar;