import React from "react";
import "./App.css";
import Header from "./components/Heder/Header";
import NavBar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Navbar/Music/Music";
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";
import Dialogs from "./components/Navbar/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {RootStateType} from "./redux/state";


type AppStateType = {
    state: RootStateType
}

function App(props: AppStateType) {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path={"/profile"} render={() => <Profile profilePage={props.state.profilePage}/>}/>
                <Route path={"/dialogs"} render={() => <Dialogs messagePage={props.state.messagePage}/>}/>
                <Route path={"/news"} component={News}/>
                <Route path={"/music"} component={Music}/>
                <Route path={"/settings"} component={Settings}/>

            </div>
        </div>
        </BrowserRouter>
            );
}

export default App;
