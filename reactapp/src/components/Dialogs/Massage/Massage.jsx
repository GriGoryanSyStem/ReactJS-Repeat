import c from "../Dialogs.module.css";
import React from "react";

const Massage = (props) => {
    return (
        <div>
            <div className={c.massage}>{props.massage}</div>
        </div>
    )
};
export default Massage;