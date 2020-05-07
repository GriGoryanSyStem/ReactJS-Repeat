import React from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Route, withRouter} from "react-router-dom";
import Friend from "./components/Friends/Friends";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {authMeThunk} from "./components/Redux/authReducer";
import {compose} from "redux";

class App extends React.Component {
    componentDidMount() {
        this.props.authMeThunk();
    }
    render() {
        return (
            <div className="appWrapper">
                <HeaderContainer/>
                <NavBar/>
                <Route render={() => <ProfileContainer/>}
                       path="/profile/:userId?"/>
                <Route render={() => this.props.isAuth
                    && <DialogsContainer/>} path="/dialogs"/>
                <Route render={() => <UsersContainer/>} path="/users"/>
                <Route component={Friend} path="/friends"/>
                <Route component={Settings} path="/settings"/>
                <Route render={() => <Login/>} path="/login"/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth:state.authR.isAuth
    }
};


export default compose(withRouter,connect(mapStateToProps, {authMeThunk}))(App)
