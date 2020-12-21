import React from "react";
import "./App.css";
import Header from "./components/Heder/Header";
import NavBar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Music from "./components/Navbar/Music/Music";
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";
import {Profile} from "./components/Profile/Profile";
import Friends from "./components/Navbar/Friends/Friends";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";


const App: React.FC = () => {
    debugger


    return (

        <div className="app-wrapper">
            <Header/>
            <NavBar/>

            <div className="app-wrapper-content">
                <Route path={"/profile"}
                       render={() => <Profile/>}/>

                <Route path={"/dialogs"}
                       render={() => <DialogsContainer/>}/>

                <Route path={"/news"} component={News}/>
                <Route path={"/music"} component={Music}/>
                <Route path={"/settings"} component={Settings}/>
                <Route path={"/friends"} component={Friends}/>

            </div>
        </div>
    );
};

export default App;
