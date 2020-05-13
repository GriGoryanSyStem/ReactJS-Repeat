import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {profileThunk, sendNewPhotoThunk, statusThunk, updateStatusThunk} from "../Redux/profileReducer";
import Profile from "./Profile";
import {redirectComponentHoc} from "../HOC/redirectComponentHoc";

class ProfileContainer extends React.Component {

    refreshPage = () => {
        if (!this.props.match.params.userId) {
            this.props.match.params.userId = this.props.id;
            if (!this.props.match.params.userId) {
                this.props.history.push('/login')
            }
        }
        this.props.profileThunk(this.props.match.params.userId);
        this.props.statusThunk(this.props.match.params.userId);
    }

    componentDidMount() {
        this.refreshPage()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshPage()
        }
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePageR.profile,
        status: state.profilePageR.status,
        id: state.authR.infoLogin.id,
        isAuth: state.authR.isAuth,
    }
};

export default compose(withRouter,
    connect(mapStateToProps, {profileThunk, statusThunk, updateStatusThunk,sendNewPhotoThunk}),
    redirectComponentHoc)(ProfileContainer);

