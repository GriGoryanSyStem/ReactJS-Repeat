import React from "react";
import Settings from "./Settings";
import {connect} from "react-redux";
import {profileThunk, sendProfileFormThunk} from "../Redux/profileReducer";

let SettingsContainer = (props) => {
    if (props.isAuth) {
        if(!props.profile){
            props.profileThunk(props.id)
        }
    }
    return (
        <div>
            {props.profile && <Settings {...props} initialValues = {props.profile}/>}
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePageR.profile,
        id: state.authR.infoLogin.id,
        isAuth: state.authR.isAuth,
    }
}

export default connect(mapStateToProps, {profileThunk,sendProfileFormThunk})(SettingsContainer);