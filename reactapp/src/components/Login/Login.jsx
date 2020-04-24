import React from "react";
import c from './login.module.css'

export const Login = () => {
    return (
        <div className={c.loginContainer}>
            <div className={c.formContainer}>
                <form className={c.formItem}>
                    <div><p>Login : </p> <input type="text"/></div>
                    <div><p>Password : </p> <input type="text"/></div>
                    <div className={c.buttonContainer}>
                        <button>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
};