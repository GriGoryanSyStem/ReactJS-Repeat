import React from "react";
import pic from "../../pictures/logo.svg";
import  c from "./Header.module.css"


const Header = () =>{
    console.log(c);
    return(
            <header className={c.header}>
                <img src={pic} alt="pic" className={c.pic}/>
            </header>
    )
};
export default Header;