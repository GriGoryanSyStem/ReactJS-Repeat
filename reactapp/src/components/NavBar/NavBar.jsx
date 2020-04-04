import React from "react";
import c from "./NavBar.module.css";

const NavBar =() =>{
    return (
        <div>
            <nav className={c.nav}>
                <div className={`${c.item} ${c.active}`} >
                    <a href={'/profile'}>Profile</a>
                </div>
                <div className={c.item}>
                    <a href={'/dialogs'}>Massages</a>
                </div>
                <div className={c.item}>
                    <a href={'/news'}>News</a>
                </div>
                <div className={c.item}>
                    <a href={'/users'}>Users</a>
                </div>
                <div className={c.item}>
                    <a href={'/settings'}>Settings</a>
                </div>
            </nav>
        </div>
    )
};
export default NavBar;