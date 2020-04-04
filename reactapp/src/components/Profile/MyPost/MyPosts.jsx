import React from "react";
import c from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    console.log(c);
    return (
        <div>
            <div>MyPosts</div>
            <textarea name="text" cols="20" rows="5"/>
            <button>AddPost</button>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
};
export default MyPosts;