import React from "react";
import Post from "./Post/Post";
import c from "../Profile.module.css";

const MyPosts = (props) => {
    let onPostChange = (e) => {
        props.dispatch({
            type: 'UPDATE_NEW_POST_TEXT',
            newText: e.target.value,
        });
    };
    let addPostRef = () => {
        props.dispatch({type: 'ADD_POST'})
    };

    return (
        <div className={c.myPostCont}>
            <h2>My Posts</h2>
            <textarea placeholder={'text'} onChange={onPostChange} name="text" cols="25" rows="3"/>
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
};

export default MyPosts;
