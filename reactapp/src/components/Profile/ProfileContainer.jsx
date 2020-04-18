import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../Redux/profileReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/6244`)
            .then(response => {
                return this.props.setUserProfileAC(response.data);
            });
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
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
)(ProfileContainer);