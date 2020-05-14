import Friends from "./Friends";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {followThunk, getUsersThunk, unFollowThunk} from "../Redux/usersReducer";
import React from "react";

class FriendsComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize, true);
    }

    clickButton = (pagNumber) => {
        this.props.getUsersThunk(pagNumber, this.props.pageSize, true);
    };

    render() {
        return (
            <Friends {...this.props} clickButton={this.clickButton}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersReducer: state.usersPageR
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {getUsersThunk, followThunk, unFollowThunk}))(FriendsComponent);