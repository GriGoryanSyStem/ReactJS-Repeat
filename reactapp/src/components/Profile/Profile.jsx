import React from "react";
import c from './Profile.module.css'
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./PofileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <div className={c.content} >
                <ProfileInfo/>
                <MyPosts/>
            </div>
        </div>
    )
};
export default Profile;