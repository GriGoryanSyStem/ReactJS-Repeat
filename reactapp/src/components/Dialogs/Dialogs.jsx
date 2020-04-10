import React from "react";
import c from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItems";
import Massage from "./Massage/Massage";

const Dialogs = (props) => {
    let onChangeArea = (e) => {
        props.changeMassageText(e.target.value); //call to DialogsContainer
    };
    let onSendMassage = () => {
        props.sendMassage();   //call to DialogsContainer
    };

    return (
        <div className={c.dialogs}>
            <div className={c.textAreaButton}>
                <textarea value={props.newMessageTextArea} onChange={onChangeArea} cols="30" rows="2"/>
                <button onClick={onSendMassage}>Sent Massage</button>
            </div>
            <div className={c.dialogsItem}>
                {props.dialogsData.map((i, k) => {
                    return (
                        <DialogItem name={i.name} id={i.id} key={k}/>
                    )
                })}
            </div>
            <div className={c.massagesItem}>
                {props.massagesData.map((i, k) => {
                    return (
                        <Massage massage={i.massage} id={i.id} key={k}/>
                    )
                })}
            </div>
        </div>
    )
};

export default Dialogs;