import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersApi extends React.Component {
    componentDidMount() {
        this.props.isLoadingFunc(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.isLoadingFunc(false);
                return this.props.setUsers(response.data.items, response.data.totalCount);
            });
    }

    clickButton = (pagNumber) => {
        this.props.isLoadingFunc(true);
        this.props.clickPage(pagNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.isLoadingFunc(false);
                return this.props.setUsers(response.data.items, response.data.totalCount);
            });
    };

    render() {
        return (
            <Users clickButton={this.clickButton}
                   followFunc={this.props.followFunc}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   usersReducer={this.props.usersReducer}
                   currentPage={this.props.currentPage}
                   isLoading={this.props.isLoading}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersReducer: state.usersPageR,
        pageSize: state.usersPageR.pageSize,
        totalUsersCount: state.usersPageR.totalUsersCount,
        currentPage: state.usersPageR.currentPage,
        isLoading: state.usersPageR.isLoading,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        followFunc: (isFollowed, userId) => {
            dispatch(
                {
                    type: "FOLLOWED",
                    userId: userId,
                    isFollowed: isFollowed
                });
        },
        setUsers: (apiResponseResult, apiTotalUsersCount) => {
            dispatch(
                {
                    type: "SET-USERS",
                    users: apiResponseResult,
                    total: apiTotalUsersCount,
                });
        },
        clickPage: (page) => {
            dispatch(
                {
                    type: "SELECTED-PAGE",
                    page: page,
                });
        },
        isLoadingFunc: (val) => {
            dispatch(
                {
                    type: "IS-LOADING",
                    isLoading: val,
                });
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApi);
export default UsersContainer;
