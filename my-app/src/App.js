import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Sitebar from "./Components/Sitebar";
import MainContent from "./Components/MainContent";

const App = () => {
    return (
        <div className = "app-site">
            <MainContent/>
            <Sitebar/>
            <Header/>
        </div>

    );
}

export default App;
