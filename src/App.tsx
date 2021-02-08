import React from "react";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Music from "./components/Navbar/Music/Music";
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";
import Friends from "./components/Navbar/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Heder/HeaderContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";


const App: React.FC = () => {
    return (

        <div className="app-wrapper">
            <HeaderContainer/>

            <NavBar/>

            <div className="app-wrapper-content">
                <Route path={"/profile/:userId?"}
                       render={() => <ProfileContainer/>}/>

                <Route path={"/dialogs"}
                       render={() => <DialogsContainer/>}/>

                <Route path={"/users"}
                       render={() => <UsersContainer/>}/>

                <Route path={"/login"}
                      render={()=> <Login/>}/>

                <Route path={"/news"} component={News}/>
                <Route path={"/music"} component={Music}/>
                <Route path={"/settings"} component={Settings}/>
                <Route path={"/friends"} component={Friends}/>

            </div>
        </div>
    );
};

export default App;
