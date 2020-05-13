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
                             id={props.id}
                             updateStatusThunk={props.updateStatusThunk}
                             sendNewPhotoThunk={props.sendNewPhotoThunk}
                />
                <MyPostsContainer/>
            </div>
        </div>
    )
}

export default Profile;