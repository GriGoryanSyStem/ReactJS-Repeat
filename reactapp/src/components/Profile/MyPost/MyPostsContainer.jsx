import React from "react";
import MyPosts from "./MyPosts";

class MyPostsContainer extends React.Component {
    render() {
        let onPostChange = (param_e) => {
            this.props.dispatch({
                type: 'UPDATE_NEW_POST_TEXT',
                newText: param_e,
            });
            this.forceUpdate(); // class component that could call forceUpdate();
        };
        let addPostRef = () => {
            this.props.dispatch({type: 'ADD_POST'});
            this.forceUpdate(); // class component that could call forceUpdate();
        };

        return (
            <MyPosts onPostChange={onPostChange}
                     addPostRef={addPostRef}
                     textTextArea={this.props.profilePage.textTextArea}
                     postData = {this.props.profilePage.postData}
            />
        )
    }
}

export default MyPostsContainer;
