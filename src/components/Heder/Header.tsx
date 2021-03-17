import React from "react";
import ss from "./Header.module.css";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    LogOutThunk: () => void
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={ss.header}>
            <img src="https://image.freepik.com/free-vector/tiger-mascot-logo-sport_27088-333.jpg"  alt="icon"/>
            <div className={ss.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.LogOutThunk}> Log Out</button></div>
                    : <NavLink to={"/login"}> Login </NavLink>}
            </div>
        </header>
    )
};


export default Header;