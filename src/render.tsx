import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {addPost, ChangePostText, RootStateType} from "./redux/state"
import {BrowserRouter} from "react-router-dom";



export let rerenderEntireTree = (state:RootStateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 ChangePostText={ChangePostText}
                 addPost={addPost}
            />
        </BrowserRouter>, document.getElementById("root"));
};


