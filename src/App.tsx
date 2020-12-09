import React from "react";
import "./App.css";
import Header from "./components/Heder/Header";
import NavBar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Music from "./components/Navbar/Music/Music";
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";
import Dialogs from "./components/Navbar/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import store, {StoreType} from "./redux/state";
import Friends from "./components/Navbar/Friends/Friends";


type AppStateType = {
    store: StoreType
}

const App: React.FC<AppStateType> = (props) => {


    return (

        <div className="app-wrapper">
            <Header/>
            <NavBar dialogsDate={props.store.getState().messagePage.dialogsDate}/>

            <div className="app-wrapper-content">

                <Route path={"/profile"}
                       render={() => <Profile profilePage={props.store.getState().profilePage}
                                              dispatch={props.store.dispatch.bind(store)}/>}/>

                <Route path={"/dialogs"}
                       render={() => <Dialogs
                           newMessage={props.store.getState().messagePage.newMessageText}
                           dispatch={props.store.dispatch.bind(store)}
                           messagePage={props.store.getState().messagePage}/>}/>

                <Route path={"/news"} component={News}/>
                <Route path={"/music"} component={Music}/>
                <Route path={"/settings"} component={Settings}/>
                <Route path={"/friends"} component={Friends}/>

            </div>
        </div>
    );
};

export default App;
