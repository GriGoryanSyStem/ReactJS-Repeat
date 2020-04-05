import React from "react";
import c from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={c.dialogs}>

            <div className={c.dialogsItem}>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/1" activeClassName={c.selected}>Dina</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/2" activeClassName={c.selected}>Andrey</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/3" activeClassName={c.selected}>Maria</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/4" activeClassName={c.selected}>Pol</NavLink>
                </div>
            </div>

            <div className={c.massagesItem}>
                <div className={c.massage}>Hi</div>
                <div className={c.massage}>How are you</div>
                <div className={c.massage}>React</div>
            </div>

        </div>
    )
};
export default Dialogs;