import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import React from "react";
import {onChangeAreaAC} from "../../Redux/profileReducer";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePageR,
    }
};

export default connect(mapStateToProps, {onChangeAreaAC})(MyPosts);



