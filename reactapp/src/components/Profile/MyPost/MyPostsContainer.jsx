import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import React from "react";

class MyPostsContainer extends React.Component {
    render() {
        return (
            <MyPosts profilePage={this.props.profilePage}/>
        )
    }
}
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
export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);



