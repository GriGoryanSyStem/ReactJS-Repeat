import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className="appWrapper">
            <Header/>
            <NavBar/>
            {/*<Profile/>*/}
            <Dialogs/>
            <Footer/>
        </div>
    );
};
export default App;
