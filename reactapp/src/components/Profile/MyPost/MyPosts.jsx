import React from "react";
import Post from "./Post/Post";
import c from "../Profile.module.css";

const MyPosts = (props) => {
    let onChangeArea = (e) => {
        props.onPostChange(e.target.value); //call to  MyPostsContainer
    };
    let onAddPost = () => {
        props.addPostRef();    //call to MyPostsContainer
    };
    return (
        <div className={c.myPostCont}>
            <h2>My Posts</h2>
            <textarea value={props.textTextArea} onChange={onChangeArea} name="text" cols="25"
                      rows="3"/>
            <div className={c.addPostBtn}>
                <button onClick={onAddPost}>AddPost</button>
            </div>
            {props.postData.map((i, k) => {
                return (
                    <Post id={i.id} massage={i.massage} likes={i.likes} key={k}/>
                )
            })}
        </div>
    )
};

export default MyPosts;
