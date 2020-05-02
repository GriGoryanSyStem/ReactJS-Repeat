import React from "react";
import Post from "./Post/Post";
import c from "../Profile.module.css";
import {Field, reduxForm} from "redux-form";

function MyPostAddPostForm(props) {
    let myHandleSubmit = (e) => {
        props.onChangeAreaAC(e.myPostText);
    }
    return (
        <div className={c.myPostCont}>
            <form onSubmit={props.handleSubmit(myHandleSubmit)}>
                <h2>My Posts</h2>
                <Field component='textarea' name={"myPostText"} cols="25" rows="3"/>
                <div className={c.addPostBtn}>
                    <button>AddPost</button>
                </div>
            </form>
            {props.profilePage.postData.map((i, k) => {
                return (
                    <Post id={i.id} massage={i.massage} likes={i.likes} key={k}/>
                )
            })}
        </div>
    )
}

MyPostAddPostForm = reduxForm({form: 'myPostMassage'})(MyPostAddPostForm);
export default MyPostAddPostForm;
