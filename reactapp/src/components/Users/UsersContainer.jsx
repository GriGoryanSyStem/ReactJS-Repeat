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
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
