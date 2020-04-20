import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import Users from "./Users";
import {clickPageAC, followAC, isLoadingAC, setUsersAC} from "../Redux/usersReducer";

class UsersApi extends React.Component {
    componentDidMount() {
        this.props.isLoadingAC(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.isLoadingAC(false);
                return this.props.setUsersAC(response.data.items, response.data.totalCount);
            });
    }

    clickButton = (pagNumber) => {
        this.props.isLoadingAC(true);
        this.props.clickPageAC(pagNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.isLoadingAC(false);
                return this.props.setUsersAC(response.data.items, response.data.totalCount);
            });
    };

    render() {
        return (
            <Users clickButton={this.clickButton}
                   followAC={this.props.followAC}
                   usersReducer={this.props.usersReducer}/>
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
    {followAC, setUsersAC, clickPageAC, isLoadingAC}  //mapDispatchToProps
)(UsersApi);