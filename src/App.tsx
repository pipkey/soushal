import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NavBar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <NavBar/>
      <Profile/>
    </div>
  );
}

export default App;
