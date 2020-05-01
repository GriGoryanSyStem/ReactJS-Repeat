import React from "react";
import c from './Profile.module.css'
import ProfileInfo from "./PofileInfo/ProfileInfo";
import MyPostsContainer from "./MyPost/MyPostsContainer";

class Profile extends React.Component {
    componentDidMount() {
        if(!this.props.match.params.userId) {
            this.props.match.params.userId = 6244;
        }
        this.props.profileThunk(this.props.match.params.userId);
        this.props.statusThunk(this.props.match.params.userId);
    }
    render() {
        return (
            <div>
                <div className={c.content}>
                    <ProfileInfo profile={this.props.profile}
                                 status={this.props.status}
                                 updateStatusThunk={this.props.updateStatusThunk}/>
                    <MyPostsContainer/>
                </div>
            </div>
        )
    }
}

export default Profile;