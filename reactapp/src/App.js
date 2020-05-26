import React, {Suspense} from "react";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {authMeThunk} from "./components/Redux/authReducer";
import {compose} from "redux";
import './App.css';
import Login from "./components/Login/Login";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBar from "./components/NavBar/NavBar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Loader from "./components/Common/Loader";
import FriendsComponent from "./components/Friends/FriendsComponent";
import SettingsContainer from "./components/Settings/SettingsContainer";

const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.authMeThunk();
    }

    render() {
        return (
            <div className="appWrapper">
                <HeaderContainer/>
                <NavBar/>
                <Switch>
                    <Redirect from="/" to="/profile"/>
                </Switch>
                <Route render={() => <ProfileContainer/>}
                       path="/profile/:userId?"/>
                <Route render={() => this.props.isAuth
                    && <DialogsContainer/>} path="/dialogs"/>
                <Suspense fallback={<Loader/>}>
                    <Route render={() => <UsersContainer/>} path="/users"/>
                    <Route render={() => <FriendsComponent/>} path="/friends"/>
                </Suspense>
                <Route component={SettingsContainer} path="/settings"/>
                <Route render={() => <Login/>} path="/login"/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authR.isAuth
    }
};

export default compose(withRouter, connect(mapStateToProps, {authMeThunk}))(App)
