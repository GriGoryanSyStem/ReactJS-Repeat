import React from "react";
import c from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={c.navContainer}>
            <nav className={c.nav}>
                <div className={`${c.item} ${c.profileCont}`}>
                    <NavLink to="/profile" activeClassName={c.selected}>Profile</NavLink>
                </div>
                <div className={`${c.item} ${c.dialogsCont}`}>
                    <NavLink to="/dialogs" activeClassName={c.selected}>Dialogs</NavLink>
                </div>
                <div className={`${c.item} ${c.newsCont}`}>
                    <NavLink to="/news" activeClassName={c.selected}>News</NavLink>
                </div>
                <div className={`${c.item} ${c.usersCont}`}>
                    <NavLink to="/users" activeClassName={c.selected}>Users</NavLink>
                </div>
                <div className={`${c.item} ${c.settingCont}`}>
                    <NavLink to="/friends" activeClassName={c.selected}>Friends</NavLink>
                </div>
                <div className={`${c.item} ${c.settingCont}`}>
                    <NavLink to="/settings" activeClassName={c.selected}>Settings</NavLink>
                </div>

            </nav>
        </div>
    )
};
export default NavBar;