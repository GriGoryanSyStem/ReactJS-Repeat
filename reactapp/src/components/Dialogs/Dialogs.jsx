import React from "react";
import c from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div>
            <div className={c.dialog}>
                <NavLink to={`/dialogs/${props.id}`} activeClassName={c.selected}>{props.name}</NavLink>
            </div>
        </div>
    )
};
const Massage = (props) => {
    return (
        <div>
            <div className={c.massage}>{props.massage}</div>
        </div>
    )
};

const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>
                <DialogItem name={'Dina'} id = "1"/>
                <DialogItem name={'Maria'} id = "2"/>
                <DialogItem name={'Andrey'} id = "3"/>
                <DialogItem name={'David'} id = "4"/>
                <DialogItem name={'Jon'} id = "5"/>
            </div>
            <div className={c.massagesItem}>
                <Massage massage = {'Hi'}/>
                <Massage massage = {'How are you'}/>
                <Massage massage = {'React'}/>
        </div>
        </div>
    )
};

export default Dialogs;