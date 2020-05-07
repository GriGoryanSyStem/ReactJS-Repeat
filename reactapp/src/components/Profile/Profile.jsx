import React from "react";
import c from './Profile.module.css'
import ProfileInfo from "./PofileInfo/ProfileInfo";
import MyPostsContainer from "./MyPost/MyPostsContainer";

class Profile extends React.Component {

    componentDidMount() {
        if (this.props.isAuth) {
            this.props.match.params.userId = this.props.userId;
        }
        this.props.profileThunk(this.props.userId);
        this.props.statusThunk(this.props.userId);
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