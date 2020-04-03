import React from 'react';
import './App.css';
import pic from "../src/pictures/logo.svg"

const App = () => {
    return (
        <div className="appWrapper">
            <header className="header">
                <img src={pic} alt="pic" className="pic"/>

            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Massages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Users</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className="content">
                <div>
                    Main Content
                </div>
                <div>
                    Users
                </div>
                <div>
                    Friends
                </div>
            </div>
        </div>
    );
};
export default App;
