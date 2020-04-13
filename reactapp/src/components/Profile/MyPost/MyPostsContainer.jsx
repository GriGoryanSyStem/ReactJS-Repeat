import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePageR
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (param_e) => {
            dispatch({
                type: 'UPDATE_NEW_POST_TEXT',
                newText: param_e,
            })
        },
        addPostRef: () => {
            dispatch({type: 'ADD_POST'})
        }
    }
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;


