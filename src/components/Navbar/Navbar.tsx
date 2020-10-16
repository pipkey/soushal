import React from 'react';
import ss from "./Navbar.module.css"

//let ss = {
  //  'nav':"Navbar_nav__1Fhxr",
   // 'item':"Navbar_item__zG8Oa"
//}
//`${ss.item} ${ss.active}`

const NavBar = () => {
    return (
        <nav className={ss.nav}>
            <div className = {`${ss.item} ${ss.active}`}><a>Profile</a></div>
            <div className = {ss.item}><a>Messages</a></div>
            <div className = {ss.item}><a>News</a></div>
            <div className = {ss.item}><a>Music</a></div>
            <div className = {ss.item}><a>Settings</a></div>
        </nav>
    )
}


export default NavBar;