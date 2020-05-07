import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {profileThunk, statusThunk, updateStatusThunk} from "../Redux/profileReducer";
import {redirectComponentHoc} from "../HOC/redirectComponentHoc";
import Profile from "./Profile";

let mapStateToProps = (state) => {
    return {
        profile: state.profilePageR.profile,
        status:state.profilePageR.status,
        userId:state.authR.infoLogin.id,
        isAuth:state.authR.isAuth
    }
};

export default compose(
    connect(mapStateToProps,{profileThunk,statusThunk,updateStatusThunk}),
    withRouter,redirectComponentHoc)(Profile);

