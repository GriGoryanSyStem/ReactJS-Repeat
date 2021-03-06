import React from "react";
import pic from "../../pictures/logo.svg";
import c from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={c.header}>
            <div className={c.headerContainer}>
                <div className={c.logoItem}><img src={pic} alt="pic" className={c.pic}/>
                    <h2>React JS 2020</h2>
                </div>
                <div className={c.loginItem}>
                    <div className={c.loginUserName}>
                        {props.infoLogin.login
                            ? <div>{props.infoLogin.login}
                                <button className={c.myButton}
                                        onClick={props.logOutThunk}>
                                    LogOut
                                </button>
                            </div>
                            : <button className={c.myButton}>
                                <NavLink to="login">Login</NavLink>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
};
export default Header;