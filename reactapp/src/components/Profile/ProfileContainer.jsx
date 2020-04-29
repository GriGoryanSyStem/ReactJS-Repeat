import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {profileThunk} from "../Redux/profileReducer";
import {redirectComponentHoc} from "../HOC/redirectComponentHoc";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    componentDidMount() {
        if(!this.props.match.params.userId) {
            this.props.match.params.userId = 6244;
        }
        this.props.profileThunk(this.props.match.params.userId);
    }
    render() {
        return (
            <Profile profile={this.props.profile} {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePageR.profile,
        isAuth:state.authR.isAuth
    }
};

export default compose(
    connect(mapStateToProps,{profileThunk}),
    withRouter,
    redirectComponentHoc
)(ProfileContainer);
