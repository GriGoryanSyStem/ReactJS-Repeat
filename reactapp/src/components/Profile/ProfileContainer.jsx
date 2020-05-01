import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {profileThunk, statusThunk, updateStatusThunk} from "../Redux/profileReducer";
// import {redirectComponentHoc} from "../HOC/redirectComponentHoc";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    componentDidMount() {
        if(!this.props.match.params.userId) {
            this.props.match.params.userId = 6244;
        }
        this.props.profileThunk(this.props.match.params.userId);
        this.props.statusThunk(this.props.match.params.userId);
    }
    render() {
        return (
            <Profile profile={this.props.profile} {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePageR.profile,
        status:state.profilePageR.status,
        isAuth:state.authR.isAuth
    }
};

export default compose(
    connect(mapStateToProps,{profileThunk,statusThunk,updateStatusThunk}),
    withRouter,
    // redirectComponentHoc // vor miacnum enq Redirecta linum Login
)(ProfileContainer);
