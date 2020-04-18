import React from "react";
import c from "../Profile.module.css";
import Loader from "../../Common/Loader";
import userImage from '../../../pictures/personUser.png';

const ProfileInfo = (props) => {
  if (!props.profile){    // anum enq vortev michev zaprosy galy error a linum
      return <Loader/>
  }
    return (
        <div className={c.profileInfo}>
            <h1>Profile Information</h1>
            <div className={c.item}>
                <img src={!props.profile.photos.large ? userImage : props.profile.photos.large  } alt="userPhoto"/>
                <h2>{props.profile.fullName}</h2>
                <h3>{props.profile.userId}</h3>
                <h4>{props.profile.lookingForAJob}</h4>
                <h5>{props.profile.lookingForAJobDescription}</h5>
            </div>
        </div>
    )
};
export default ProfileInfo;