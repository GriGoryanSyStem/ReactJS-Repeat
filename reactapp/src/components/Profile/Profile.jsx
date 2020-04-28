import React from "react";
import c from './Profile.module.css'
import ProfileInfo from "./PofileInfo/ProfileInfo";
import MyPostsContainer from "./MyPost/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <div className={c.content}>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer/>
            </div>
        </div>
    )
};

export default Profile;