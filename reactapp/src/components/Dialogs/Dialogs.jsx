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
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={c.massagesItem}>
                <Massage massage={massagesData[0].massage} id={massagesData[0].id}/>
                <Massage massage={massagesData[1].massage} id={massagesData[1].id}/>
                <Massage massage={massagesData[2].massage} id={massagesData[2].id}/>
            </div>
        </div>
    )
};

export default Dialogs;