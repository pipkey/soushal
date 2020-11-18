import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsDate = [
    {id: 1, name: "Phil"},
    {id: 2, name: "Sergo"},
    {id: 3, name: "Pavel"},
    {id: 4, name: "Denis"},
    {id: 5, name: "Victor"},
];

let messageDate = [
    {id: 1, message: "Hello"},
    {id: 2, message: "Go eat Shkvarky"},
    {id: 3, message: "well done"},
    {id: 4, message: "beer?"},
    {id: 5, message: "we will go to cinema"}
];


let postsDate = [
    {id: 1, message: "Hi, how are you?", likeCounts: 35},
    {id: 2, message: "It's my first Post", likeCounts: 74},
    {id: 3, message: "Жыве Беларусь", likeCounts: 3000000},
    {id: 4, message: "go home", likeCounts: 22},
    {id: 5, message: "we live in your dream", likeCounts: 11},
];


ReactDOM.render(
  <React.StrictMode>
    <App
        dialogsDate={dialogsDate}
        messageDate={messageDate}
        postsDate={postsDate}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
