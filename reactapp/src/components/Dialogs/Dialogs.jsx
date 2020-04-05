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
    let dialogsData = [
        {id: 1, name: 'Dina'},
        {id: 1, name: 'Maria'},
        {id: 1, name: 'Andrey'},
        {id: 1, name: 'David'},
        {id: 1, name: 'Jon'},
    ];
    let massagesData = [
        {id: 1, massage: 'Hi'},
        {id: 1, massage: 'How are you'},
        {id: 1, massage: 'React'},
    ];
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>
                {dialogsData.map((i, k) => {
                        return (
                            <DialogItem name={i.name} id={i.id} key={k}/>
                        )
                    })}
            </div>
            <div className={c.massagesItem}>
                {massagesData.map((i, k) => {
                        return (
                            <Massage massage={i.massage} id={i.id} key={k}/>
                        )
                    })}
            </div>
        </div>
    )
};

export default Dialogs;