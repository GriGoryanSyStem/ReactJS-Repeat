import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authMeThunk, logOutThunk} from "../Redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMeThunk();
    }
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        store: state.authR,
        userImage: state.profilePageR.profile
    }
};

export default connect(mapStateToProps, {authMeThunk,logOutThunk})(HeaderContainer);