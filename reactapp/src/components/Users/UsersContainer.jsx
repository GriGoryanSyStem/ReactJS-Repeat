import Users from "./Users";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        usersReducer: state.usersPageR
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
        setUsers: (apiResponseResult) => {
            dispatch(
                {
                    type: "SET-USERS",
                    users:apiResponseResult,
                });
        },
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
