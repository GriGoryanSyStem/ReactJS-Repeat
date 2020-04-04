import React from "react";
import c from './Profile.module.css'

const Profile = () => {
    console.log(c);
    return (
        <div>
            <div className={c.content} >
                <div className={c.item}>
                    Users
                </div>
                <div className={c.item}>
                    Friends
                </div>
            </div>
        </div>
    )
};
export default Profile;