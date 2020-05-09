import React from "react";
import c from './Profile.module.css'
import ProfileInfo from "./PofileInfo/ProfileInfo";
import MyPostsContainer from "./MyPost/MyPostsContainer";

function Profile(props) {
    return (
        <div>
            <div className={c.content}>
                <ProfileInfo profile={props.profile}
                             status={props.status}
                             updateStatusThunk={props.updateStatusThunk}/>
                <MyPostsContainer/>
            </div>
        </div>
    )
}

export default Profile;