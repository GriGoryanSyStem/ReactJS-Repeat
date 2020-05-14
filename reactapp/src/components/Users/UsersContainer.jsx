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
// import {getUsersSelector} from "../Redux/users-selectors";


class UsersApi extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage,this.props.pageSize,null);
    }
    clickButton = (pagNumber) => {
        this.props.getUsersThunk(pagNumber,this.props.pageSize,null);
    };
    render() {
        return (
            <Users {...this.props} clickButton = {this.clickButton}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        // users:getUsersSelector(state), //83 not used
        usersReducer: state.usersPageR,
    }
};
export default compose(
    connect(mapStateToProps,
        {clickPageAC,getUsersThunk,followThunk,unFollowThunk}))
(UsersApi);
