import React from "react";
import c from './login.module.css';
import {Field, reduxForm} from "redux-form";
import {renderField} from "../Validators/FormsControls";
import {maxLength, minLength, required} from "../Validators/validators";
import {connect} from "react-redux";
import {loginThunk} from "../Redux/authReducer";
import {Redirect} from "react-router-dom";

const maxLength30 = maxLength(30);
const minLength1 = minLength(2);

let LoginForm = (props) => {
    return (
        <div className={c.formContainer}>
            <h1>Login</h1>
            <form className={c.formItem} onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text"
                           label="email"
                           validate={[required, maxLength30, minLength1]}
                           component={renderField}
                           name={'myEmail'}/>
                </div>
                <div>
                    <Field type="password"
                           label="password"
                           validate={[required, maxLength30, minLength1]}
                           component={renderField}
                           name={'myPassword'}
                    />
                </div>
                <div>
                    <Field type="checkbox"
                           component={renderField}
                           name={'myRemember'}/>
                    <span>Remember Me</span>
                </div>
                <div className={c.buttonContainer}>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

let Login = (props) => {
    let myHandleSubmit = (e) => {
        props.loginThunk(e.myEmail, e.myPassword, e.myRememberMe)
    }
   if(props.isAuth){
       return <Redirect to={'/profile'}/>
   }
    return <div className={c.loginContainer}>
        <LoginFormRedux onSubmit={myHandleSubmit}/>
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth:state.authR.isAuth
    }
};


let LoginFormRedux = reduxForm({form: 'login'})(LoginForm);
export default connect(mapStateToProps, {loginThunk})(Login)


