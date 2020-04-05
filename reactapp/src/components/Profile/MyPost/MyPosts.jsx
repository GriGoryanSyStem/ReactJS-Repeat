import React from "react";
import Post from "./Post/Post";
import c from "../Profile.module.css";

const MyPosts = (props) => {

    return (
        <div className={c.myPostCont}>
            <h2>My Posts</h2>
            <textarea name="text" cols="20" rows="5"/>
            <div className={c.addPostBtn}>
                <button>AddPost</button>
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