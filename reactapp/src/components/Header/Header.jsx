import React from "react";
import pic from "../../pictures/logo.svg";
import photoPerson from '../../pictures/personUser.png'
import c from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={c.header}>
            <div className={c.headerContainer}>
                <div className={c.logoItem}><img src={pic} alt="pic" className={c.pic}/>
                    <h2>React JS 2020</h2>
                </div>
                <div className={c.loginItem}>
                    <div className={c.loginUserName}>
                        <h3>{props.store.login ? props.store.login : 'Login'}</h3>
                    </div>
                    <div className={c.loginImage}>
                        <img src={photoPerson} alt="userPhoto"/>
                    </div>
                </div>
            </div>
        </header>
    )
};
export default Header;