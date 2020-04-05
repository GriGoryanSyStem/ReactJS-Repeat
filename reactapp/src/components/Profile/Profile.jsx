import React from "react";
import c from './Profile.module.css'
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./PofileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <div className={c.content}>
                <ProfileInfo/>
                <MyPosts postData = {props.profilePage.postData}/>
            </div>
        </div>
    )
};
export default Profile;