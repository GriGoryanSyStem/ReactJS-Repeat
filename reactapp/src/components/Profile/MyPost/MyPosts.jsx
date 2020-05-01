import React from "react";
import Post from "./Post/Post";
import c from "../Profile.module.css";
import {Field, reduxForm} from "redux-form";


let MyPostAddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h2>My Posts</h2>
            <Field  component='textarea' name={"myPostText"} cols="25" rows="3"/>
            <div className={c.addPostBtn}>
                <button>AddPost</button>
            </div>
        </form>
    )
}

MyPostAddPostForm = reduxForm({form: 'myPostMassage'})(MyPostAddPostForm);

const MyPosts = (props) => {
    let mysOnSubmit = (values) => {
        props.onChangeAreaAC(values.myPostText);
    }

return (
    <div className={c.myPostCont}>
        <MyPostAddPostForm onSubmit = {mysOnSubmit}/>
        {props.profilePage.postData.map((i, k) => {
            return (
                <Post id={i.id} massage={i.massage} likes={i.likes} key={k}/>
            )
        })}
    </div>
)
}

export default MyPosts;
