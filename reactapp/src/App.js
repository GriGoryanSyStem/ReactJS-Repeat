import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom";

const App = (props) => {
    debugger
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <NavBar/>
                <Route render={() => <Profile profilePage={props.state.profilePage}/>} path="/profile"/>
                <Route render={() => <Dialogs dialogPage={props.state.dialogPage}/>}
                       path="/dialogs"/>
            </div>
        </BrowserRouter>
    );
};
export default App;