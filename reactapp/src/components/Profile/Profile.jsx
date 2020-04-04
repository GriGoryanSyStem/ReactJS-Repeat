import React from "react";
import c from './Profile.module.css'
import MyPosts from "./MyPost/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={c.content} >
                <div className={c.item}>
                    ava + description
                </div>
                <div className={c.item}>
                    Friends
                </div>
                <MyPosts/>
            </div>
        </div>
    )
};
export default Profile;