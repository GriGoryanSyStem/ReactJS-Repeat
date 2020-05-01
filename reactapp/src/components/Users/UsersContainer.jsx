import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    clickPageAC,
    followThunk,
    getUsersThunk,
    unFollowThunk
} from "../Redux/usersReducer";
import Users from "./Users";


class UsersApi extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage,this.props.pageSize);
    }

    clickButton = (pagNumber) => {
        this.props.getUsersThunk(pagNumber,this.props.pageSize);
    };
    render() {
        return (
            <Users {...this.props} clickButton = {this.clickButton}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersReducer: state.usersPageR,
    }
};
export default compose(
    connect(mapStateToProps,
        {clickPageAC,getUsersThunk,followThunk,unFollowThunk}))
(UsersApi);
