import React from "react";
import pic from "../../pictures/logo.svg";
import  c from "./Header.module.css";

const Header = () =>{
    return(
            <header className={c.header}>
                <img src={pic} alt="pic" className={c.pic}/>
                <h2>React JS 2020</h2>
            </header>
    )
};
export default Header;