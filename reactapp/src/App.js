import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import Friend from "./components/Friends/Friends";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <div className="appWrapper">
            <HeaderContainer/>
            <NavBar/>
            <Route render={() => <ProfileContainer/>}
                   path="/profile/:userId?"/>
            <Route render={() => <DialogsContainer/>}
                   path="/dialogs"/>
            <Route render={() => <UsersContainer/>} path="/users"/>
            <Route component={Friend} path="/friends"/>
            <Route component={Settings} path="/settings"/>
        </div>
    );
};

export default App;
