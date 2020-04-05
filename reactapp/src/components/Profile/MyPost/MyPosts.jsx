import React from "react";
import Post from "./Post/Post";
import c from "../Profile.module.css";

const MyPosts = () => {
    return (
        <div className={c.myPostCont}>
            <h2>My Posts</h2>
            <textarea name="text" cols="20" rows="5"/>
            <div className={c.addPostBtn}><button>AddPost</button></div>
            <Post massage='Hi, how are you'/>
            <Post massage='My name is Props'/>
        </div>
    )
};
export default MyPosts;