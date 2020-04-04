import React from "react";
import c from "./NavBar.module.css"


const NavBar =() =>{
    console.log(c);
    return (
        <div>
            <nav className={c.nav}>
                <div className={`${c.item} ${c.active}`} >
                    <a href={'#'}>Profile</a>
                </div>
                <div className={c.item}>
                    <a href={'#'}>Massages</a>
                </div>
                <div className={c.item}>
                    <a href={'#'}>News</a>
                </div>
                <div className={c.item}>
                    <a href={'#'}>Users</a>
                </div>
                <div className={c.item}>
                    <a href={'#'}>Settings</a>
                </div>
            </nav>
        </div>
    )
};
export default NavBar;