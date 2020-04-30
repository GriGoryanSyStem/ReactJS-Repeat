import React from "react";
import { Field, reduxForm } from 'redux-form';
import c from './login.module.css';

const LoginForm = (props) => {
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
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <LoginReduxForm onSubmit = {onSubmit}/>
        </div>
    )
}
export default Login;