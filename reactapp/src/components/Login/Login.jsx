import React from "react";
import {Field, reduxForm} from "redux-form";
import {renderField} from "../Validators/FormsControls";
import {maxLength, minLength, required} from "../Validators/validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import c from './login.module.css';
import {loginThunk} from "../Redux/authReducer";

const maxLength30 = maxLength(30);
const minLength2 = minLength(2);

let LoginForm = (props) => {
    return (
        <div className={c.formContainer}>
            <h1>Login</h1>
            <form className={c.formItem} onSubmit={props.handleSubmit}>
                <div>
                    <Field type="email"
                           label="email"
                           validate={[required, maxLength30, minLength2]}
                           component={renderField}
                           name={'email'}/>
                </div>
                <div>
                    <Field type="password"
                           label="password"
                           validate={[required, maxLength30, minLength2]}
                           component={renderField}
                           name={'password'}
                    />
                </div>
                <div>
                    <Field type="checkbox"
                           component={renderField}
                           name={'rememberMe'}/>
                    <span>Remember Me</span>
                </div>
                <div className={c.buttonContainer}>
                    <button>Submit</button>
                </div>
                <div>
                    {props.error && <span className={c.errorSpan}>{props.error}</span>}
                </div>
                <div>
                    {props.captchaUrl && <Field type="text"
                                                validate={[required, maxLength30, minLength2]}
                                                component={renderField}
                                                name={'captcha'}
                    />}
                    {props.captchaUrl && <img src={props.captchaUrl.url} alt="captchaUrl"/>}
                </div>
            </form>
        </div>
    )
}
let Login = (props) => {
    let myHandleSubmit = (e) => {
        props.loginThunk(e.email, e.password, e.rememberMe, e.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div className={c.loginContainer}>
        <LoginFormRedux onSubmit={myHandleSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authR.isAuth,
        captchaUrl: state.authR.captchaUrl
    }
};

let LoginFormRedux = reduxForm({form: 'login'})(LoginForm);
export default connect(mapStateToProps, {loginThunk})(Login)


