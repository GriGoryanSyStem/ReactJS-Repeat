import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Friend from "./components/Friends/Friends";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <div className="appWrapper">
            <Header/>
            <NavBar/>
            <Route render={() => <Profile  profilePage={props.state.profilePage}
                                           dispatch={props.dispatch}/>}
                   path="/profile"/>
            <Route render={() => <Dialogs dialogPage={props.state.dialogPage}/>}
                   path="/dialogs"/>
            <Route component={Friend} path="/friends"/>
            <Route component={Settings} path="/settings"/>
        </div>
    );
};
export default App;
