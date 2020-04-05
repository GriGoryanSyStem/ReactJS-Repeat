import React from "react";
import c from "../Profile.module.css";

const ProfileInfo = () => {
    return (
        <div className={c.profileInfo}>
            <h1>Profile Information</h1>
            <div className={c.item}>
                ava + description
            </div>
            <div className={c.item}>
                Friends
            </div>
        </div>
    )
};
export default ProfileInfo