import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route,BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
        <div className="appWrapper">
            <Header/>
            <NavBar/>
            <Route component={Profile} path="/profile"/>
            <Route component={Dialogs} path="/dialogs"/>
            <Footer/>
        </div>
        </BrowserRouter>
    );
};
export default App;
