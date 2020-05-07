import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logOutThunk} from "../Redux/authReducer";

class HeaderContainer extends React.Component {

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

export default connect(mapStateToProps, {logOutThunk})(HeaderContainer);