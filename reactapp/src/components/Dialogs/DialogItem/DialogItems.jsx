import c from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    return (
        <div>
            <div className={c.dialog}>
                <NavLink to={`/dialogs/${props.id}`} activeClassName={c.selected}>{props.name}</NavLink>
            </div>
        </div>
    )
};
export default DialogItem;