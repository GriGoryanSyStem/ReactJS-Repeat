import React from "react";
import Post from "./Post/Post";
import c from "../Profile.module.css";

const updateNewPostTextAC = (newText) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText,
    }
};

const addPostAC = () => {
    return {type:'ADD-POST'}
};

const MyPosts = (props) => {

    let onPostChange = (e) => {
        props.dispatch(updateNewPostTextAC(e.target.value));
    };

    let addPostRef = () => {
        props.dispatch(addPostAC())
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
};

export default MyPosts;
