import React from "react";
import c from './Profile.module.css'
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./PofileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <div className={c.content}>
                <ProfileInfo/>
                <MyPosts profilePage={props.profilePage}
                         dispatch={props.dispatch}/>
            </div>
        </div>
    )
};
export default Profile;