import React from "react";
import c from './Profile.module.css'
import ProfileInfo from "./PofileInfo/ProfileInfo";
import MyPostsContainer from "./MyPost/MyPostsContainer";
import {Redirect} from "react-router-dom";

const Profile = (props) => {
    if(!props.isAuth) {
        return <Redirect to = {'/login'}/>;
    }
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