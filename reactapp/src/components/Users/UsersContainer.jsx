import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import {clickPageAC, followAC, isLoadingAC, setUsersAC} from "../Redux/usersReducer";
import {usersAPI} from "../../api/api";

class UsersApi extends React.Component {
    componentDidMount() {
        this.props.isLoadingAC(true);
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize)
            .then(data => {
                this.props.isLoadingAC(false);
                return this.props.setUsersAC(data.items, data.totalCount);
            });
    }

    clickButton = (pagNumber) => {
        this.props.isLoadingAC(true);
        this.props.clickPageAC(pagNumber);
        usersAPI.getUsers(pagNumber,this.props.pageSize).then(data => {
                this.props.isLoadingAC(false);
                return this.props.setUsersAC(data.items, data.totalCount);
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