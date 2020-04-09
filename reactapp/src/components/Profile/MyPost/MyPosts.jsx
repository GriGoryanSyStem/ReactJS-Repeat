import React from "react";
import Post from "./Post/Post";
import c from "../Profile.module.css";

class MyPosts extends React.Component {
    render() {
        let onPostChange = (e) => {
            this.props.dispatch({
                type: 'UPDATE_NEW_POST_TEXT',
                newText: e.target.value,

            });
            this.forceUpdate(); // class component that could call forceUpdate();
        };
        let addPostRef = () => {
            this.props.dispatch({type: 'ADD_POST'});
            this.forceUpdate(); // class component that could call forceUpdate();
        };

        return (
            <div className={c.myPostCont}>
                <h2>My Posts</h2>
                <textarea value={this.props.profilePage.textTextArea} onChange={onPostChange} name="text" cols="25"
                          rows="3"/>
                <div className={c.addPostBtn}>
                    <button onClick={addPostRef}>AddPost</button>
                </div>
                {this.props.profilePage.postData.map((i, k) => {
                    return (
                        <Post id={i.id} massage={i.massage} likes={i.likes} key={k}/>
                    )
                })}
            </div>
        )
    }
}

export default MyPosts;
