import React from "react";
import Post from "./Post/Post";
import c from "../Profile.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "../../Validators/validators";
import {renderField} from "../../Validators/FormsControls";

const maxLength15 = maxLength(15);
const minLength1 = minLength(2);

const MyPosts = (props) => {
    let myHandleSubmit = (e) => {
        props.onChangeAreaAC(e.myPostText);
    }
    return (
        <div className={c.myPostCont}>
            <form onSubmit={props.handleSubmit(myHandleSubmit)}>
                <h2>My Posts</h2>
                <Field type="textarea"
                       label="MyPost"
                       name={"myPostText"}
                       component={renderField}
                       validate={[required, maxLength15, minLength1]}
                       cols="25"
                       rows="3"
                />
                <div className={c.addPostBtn}>
                    <button>AddPost</button>
                </div>
            </form>
            {[...props.postData].reverse().map((i, k) => {
                return (
                    <Post id={i.id} massage={i.massage} likes={i.likes} key={k}/>
                )
            })}
        </div>
    )
}

export default reduxForm({form: 'myPostMassage'})(React.memo(MyPosts));
