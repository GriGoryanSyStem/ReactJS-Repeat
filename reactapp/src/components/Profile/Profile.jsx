import React from "react";
import c from './Profile.module.css'
import ProfileInfo from "./PofileInfo/ProfileInfo";
import Loader from "../Common/Loader";
import MyPostsContainer from "./MyPost/MyPostsContainer";

function Profile(props) {
    return (
        <div>
            {!props.profile
                ? <Loader/>
                : <div className={c.content}>
                    <ProfileInfo profile={props.profile}
                                 photosLarge={props.profile.photos['large']}
                                 status={props.status}
                                 aboutMe = {props.profile.aboutMe}
                                 id={props.id}
                                 updateStatusThunk={props.updateStatusThunk}
                                 sendNewPhotoThunk={props.sendNewPhotoThunk}
                                 contacts={props.profile.contacts}
                                 lookingForAJob={props.profile.lookingForAJob}
                                 lookingForAJobDescription={props.profile.lookingForAJobDescription}/>
                    <MyPostsContainer/>
                </div>
            }
        </div>
    )
}

export default Profile;