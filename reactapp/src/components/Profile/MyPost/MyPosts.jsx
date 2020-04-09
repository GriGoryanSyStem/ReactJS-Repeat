import React from "react";
import Post from "./Post/Post";
import c from "../Profile.module.css";

function MyPosts(props) {

    let addPostRef = () => {
        props.dispatch({type: "ADD-POST"});
    };

    let onPostChange = (e) => {
        props.dispatch({
            type: "UPDATE-NEW-POST-TEXT",
            newText: e.target.value
        });
    };

    return (
        <div className={c.myPostCont}>
            <h2>My Posts</h2>
            <textarea placeholder={'text'} onChange={onPostChange} name="text" cols="20" rows="5"/>
            <div className={c.addPostBtn}>
                <button onClick={addPostRef}>AddPost</button>
            </div>
            {props.profilePage.postData.map((i, k) => {
                return (
                    <Post id={i.id} massage={i.massage} likes={i.likes} key={k}/>
                )
            })}
        </div>
    )
}

export default MyPosts;