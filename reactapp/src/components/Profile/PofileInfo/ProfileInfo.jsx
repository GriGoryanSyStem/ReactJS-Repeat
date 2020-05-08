import React, {useEffect, useState} from "react";
import c from "../Profile.module.css";
import Loader from "../../Common/Loader";
import userImage from '../../../pictures/personUser.png';

function ProfileInfo(props) {
    let [editMode,setEditMode] = useState(true);
    let [status,setStatus] = useState(props.status);

    let funcEditChange = () => {
        setEditMode(!editMode)
        props.updateStatusThunk(status)
    }
    let funcStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    if (!props.profile) {
        return <Loader/>
    }
    return (
        <div className={c.profileInfo}>
            <h1>Profile Information</h1>
            <div className={c.item}>
                <img src={!props.profile.photos.large ? userImage : props.profile.photos.large}
                     alt="userPhoto"/>
                <div className={c.statusContainer}>
                    {editMode &&
                        <div>
                            <p onClick={funcEditChange}>{props.status ? props.status : 'No Status'}</p>
                        </div>}
                    {!editMode &&
                        <div>
                            <input autoFocus={true} onBlur={funcEditChange} onChange={funcStatusChange} value={status}/>
                        </div>}
                </div>
                <h2>{props.profile.fullName}</h2>
                <h3>{props.profile.userId}</h3>
                <h4>{props.profile.lookingForAJob}</h4>
                <h5>{props.profile.lookingForAJobDescription}</h5>
            </div>
        </div>
    )
}

export default ProfileInfo;