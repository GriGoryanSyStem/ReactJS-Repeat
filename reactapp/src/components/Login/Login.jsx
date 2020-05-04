import React from "react";
import c from './login.module.css';
import {Field, reduxForm} from "redux-form";
import {renderField} from "../Validators/FormsControls";
import {maxLength, minLength, required} from "../Validators/validators";

const maxLength15 = maxLength(15);
const minLength1 = minLength(2);

let Login = (props) => {

    let myHandleSubmit = (e) => {
        console.log(e)
    }

    return <div className={c.loginContainer}>
        <h1>Login</h1>
        <div className={c.formContainer}>
            <form className={c.formItem} onSubmit={props.handleSubmit(myHandleSubmit)}>
                <div>
                    <Field type="text"
                           label="email"
                           validate={[required, maxLength15, minLength1]}
                           component={renderField}
                           name={'login'}/>
                </div>
                <div>
                    <Field type="password"
                           label="password"
                           validate={[required, maxLength15, minLength1]}
                           component={renderField}
                           name={'password'}
                    />
                </div>
                <div>
                    <Field type="checkbox"
                           component={renderField}
                           name={'remember'}/>
                           <span>Remember Me</span>
                </div>
                <div className={c.buttonContainer}>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    </div>
}

export default reduxForm({form: 'login'})(Login);


