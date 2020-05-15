import React, {useEffect, useState} from "react";
import c from "../Profile.module.css";
import Loader from "../../Common/Loader";
import userImage from '../../../pictures/personUser.png';

function ProfileInfo(props) {
    let [editMode, setEditMode] = useState(true);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    let funcEditChange = () => {
        setEditMode(!editMode)
        if (props.profile.userId === props.id) {
            props.updateStatusThunk(status)
        }
    }

    let funcStatusChange = (e) => {
        if (props.profile.userId === props.id) {
            setStatus(e.currentTarget.value)
        }
    }

    let selectMyPhoto = (e) => {
        if (e.target.files || e.target.files.length !== 0) {
            props.sendNewPhotoThunk(e.target.files[0]);
        }
    }

    if (!props.profile) {
        return <Loader/>
    }
    return (
        <div className={c.profileInfo}>
            <h1>Profile Information</h1>
            <div className={c.item}>
                <div><img src={props.photosLarge || userImage} alt="userPhoto"/></div>
                <div><h4>{props.aboutMe}</h4></div>
                <div> {props.profile.userId === props.id && <input type={"file"} onChange={selectMyPhoto}/>}</div>
                <div className={c.statusContainer}>
                    {editMode && <div>
                        <p onClick={funcEditChange}>{props.status ? props.status : 'No Status'}</p>
                    </div>}
                    {!editMode && <div>
                        <input autoFocus={true} onBlur={funcEditChange} onChange={funcStatusChange} value={status}/>
                    </div>}
                </div>
                <div>Full Name :<h2> {props.profile.fullName}</h2></div>
                <div>User ID : <h3> {props.profile.userId}</h3></div>
                <div>Looking For a Job :<h3>  {props.lookingForAJob ? 'Yes' : 'No'}</h3></div>
                <div>Description :<h3>  {props.lookingForAJobDescription}</h3></div>
                {Object.keys(props.contacts).map((keyName, i) => (
                    <div key={i}>
                        {props.contacts[keyName] &&
                            <span> {keyName.toLocaleUpperCase()} : {props.contacts[keyName].split('https://')}</span>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProfileInfo;