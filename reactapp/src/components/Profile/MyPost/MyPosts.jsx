import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>MyPosts</div>
            <textarea name="text" cols="20" rows="5"/>
            <button>AddPost</button>
            <Post massage='Hi, how are you'/>
            <Post massage='My name is Props'/>
        </div>
    )
};
export default MyPosts;