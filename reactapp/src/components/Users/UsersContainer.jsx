import Users from "./Users";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        usersReducer: state.usersPageR,
        pageSize: state.usersPageR.pageSize,
        totalUsersCount: state.usersPageR.totalUsersCount,
        currentPage: state.usersPageR.currentPage,
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
        setUsers: (apiResponseResult,apiTotalUsersCount) => {
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
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
