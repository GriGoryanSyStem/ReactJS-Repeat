import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authMeThunk} from "../Redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMeThunk();
    }
    render() {
        return (
            <Header {...this.props} loginImage = {this.props.loginImage}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        store: state.authR,
        loginImage:state.profilePageR.profile
    }
};

export default connect(mapStateToProps, {authMeThunk})(HeaderContainer);