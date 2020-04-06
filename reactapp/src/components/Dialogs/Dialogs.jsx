import React from "react";
import c from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItems";
import Massage from "./Massage/Massage";

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>
                {props.dialogPage.dialogsData.map((i, k) => {
                    return (
                        <DialogItem name={i.name} id={i.id} key={k}/>
                    )
                })}
            </div>
            <div className={c.massagesItem}>
                {props.dialogPage.massagesData.map((i, k) => {
                    return (
                        <Massage massage={i.massage} id={i.id} key={k}/>
                    )
                })}
            </div>
        </div>
    )
};

export default Dialogs;