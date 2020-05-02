import React from "react";
import c from './login.module.css';
import {Field, reduxForm} from "redux-form";

let Login = (props) => {
    let myHandleSubmit = (e) => {
        console.log(e)
    }
    return <div className={c.loginContainer}>
        <h1>Login</h1>
        <div className={c.formContainer}>
            <form className={c.formItem} onSubmit={props.handleSubmit(myHandleSubmit)}>
                <div>
                    <p>Login :</p>
                    <Field type="text" component={'input'} name={'login'}/>
                </div>
                <div>
                    <p>Password : </p>
                    <Field type="text" component={'input'} name={'password'}/>
                </div>
                <div>
                    <Field type="checkbox" component={'input'} name={'remember'}/>Remember Me
                </div>
                <div className={c.buttonContainer}>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    </div>
}

Login = reduxForm({form: 'login'})(Login);
export default Login;


