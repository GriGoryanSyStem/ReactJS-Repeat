import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import {
    clickPageAC,
    followThunk,
    getUsersThunk,
    unFollowThunk
} from "../Redux/usersReducer";


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

export default connect(
    mapStateToProps,
    {clickPageAC,getUsersThunk,followThunk,unFollowThunk}  //mapDispatchToProps
)(UsersApi);