import React from "react";
import c from './login.module.css';

import {Field, reduxForm} from "redux-form";

let LoginForm = props => {

    return (
        <div className={c.loginContainer}>
            <h1>Login</h1>
            <div className={c.formContainer}>
                <form className={c.formItem} onSubmit={props.handleSubmit}>
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
    )
}

LoginForm = reduxForm({form: 'login'})(LoginForm);

const Login = () => {
    const funcOnSubmit = (formData) => {
        console.log(formData)
    }
    return(
        <div>
            <LoginForm onSubmit = {funcOnSubmit}/>
        </div>
    )
}
export default Login

