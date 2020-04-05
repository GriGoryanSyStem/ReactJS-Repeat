import React from "react";
import Post from "./Post/Post";
import c from "../Profile.module.css";

const MyPosts = () => {
    let postData = [
        {id: 1, massage: 'First massage', likes: 7},
        {id: 2, massage: 'Hi, how are you', likes: 5},
        {id: 3, massage: 'My name is Props', likes: 21},
    ];
    return (
        <div className={c.myPostCont}>
            <h2>My Posts</h2>
            <textarea name="text" cols="20" rows="5"/>
            <div className={c.addPostBtn}>
                <button>AddPost</button>
            </div>
            {postData.map((i, k) => {
                return (
                    <Post id={i.id} massage={i.massage} likes={i.likes} key={k}/>
                )
            })}
        </div>
    )
};
export default MyPosts;