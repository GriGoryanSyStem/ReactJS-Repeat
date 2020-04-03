import React from "react";
import pic from "../pictures/logo.svg";


const Header = () =>{
    return(
            <header className="header">
                <img src={pic} alt="pic" className="pic"/>
            </header>
    )
};
export default Header;