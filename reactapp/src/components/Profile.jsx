import React from "react";
import back from "../pictures/background.jpg";
import '../App.css'

const Profile = () => {
    return (
        <div>
            <div className="content">
                <div>
                    <img src={back} alt="" className='back'/>
                </div>
                <div>
                    Users
                </div>
                <div>
                    Friends
                </div>
            </div>
        </div>
    )
};
export default Profile;