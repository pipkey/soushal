import React from "react";
import "./App.css";
import Header from "./components/Heder/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile, {PostDataType} from "./components/Profile/Profile";
import Dialogs, {MainDialogsPropsType} from "./components/Navbar/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Navbar/Music/Music";
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";

type AppPropsType={
    dialogsDate:Array<MainDialogsPropsType>
    messageDate:Array<MainDialogsPropsType>
    postsDate:Array<PostDataType>
}

function App(props:AppPropsType) {

    let DialogsRand =  () =>

        <Dialogs
        dialogsDate={props.dialogsDate}
        messageDate={props.messageDate}
        />;


    let ProfileRand = () =>
        <Profile
            postsDate={props.postsDate}
        />



    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={ ProfileRand }/>
                    <Route path="/dialogs" render={ DialogsRand }/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
