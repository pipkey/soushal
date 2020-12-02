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
import {RootStateType} from "./redux/state";
import Friends from "./components/Navbar/Friends/Friends";


type AppStateType = {
    state: RootStateType
    addPost: (newPost: string)=> void
    ChangePostText:(newText:string)=> void
}

function App(props: AppStateType) {



    return (

        <div className="app-wrapper">
            <Header/>
            <NavBar dialogsDate={props.state.messagePage.dialogsDate}/>

            <div className="app-wrapper-content">

                <Route path={"/profile"}
                       render={() => <Profile profilePage={props.state.profilePage}
                                              addPost={props.addPost}
                                              ChangePostText={props.ChangePostText}
                       />}/>

                <Route path={"/dialogs"}
                       render={() => <Dialogs sidebar={props.state.sidebar}
                       messagePage={props.state.messagePage}/>}/>

                <Route path={"/news"} component={News}/>
                <Route path={"/music"} component={Music}/>
                <Route path={"/settings"} component={Settings}/>
                <Route path={"/friends"} component={Friends}/>

            </div>
        </div>
            );
}

export default App;
