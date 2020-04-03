import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Profile from "./components/Profile";


const App = () => {
    return (
        <div className="appWrapper">
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
};
export default App;
