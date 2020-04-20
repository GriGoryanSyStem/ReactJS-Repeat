import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../Redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 6244
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                return this.props.setUserProfileAC(response.data);
            });
    }

    render() {
        return (
            <Profile profile={this.props.profile} {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePageR.profile
    }
};

export default connect(mapStateToProps,
    {setUserProfileAC}
)(withRouter(ProfileContainer));