import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import Friend from "./components/Friends/Friends";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    return (
        <div className="appWrapper">
            <Header/>
            <NavBar/>
            <Route render={() => <ProfileContainer/>}
                   path="/profile"/>
            <Route render={() => <DialogsContainer/>}
                   path="/dialogs"/>
            <Route render={() => <UsersContainer/>} path="/users"/>
            <Route component={Friend} path="/friends"/>
            <Route component={Settings} path="/settings"/>
        </div>
    );
};

export default App;
