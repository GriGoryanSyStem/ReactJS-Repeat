import React from "react";
import c from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItems";
import Massage from "./Massage/Massage";

const Dialogs = (props) => {
    let changeMassageText = (e) => {
        props.dispatch({
            type: 'ADD_NEW_MASSAGE_TEXT',
            massage: e.target.value
        })
    };
    let sendMassage = () => {
        props.dispatch({
            type: 'SEND_MASSAGE',
        })
    };

    return (
        <div className={c.dialogs}>
            <div className={c.textAreaButton}>
                <textarea onChange={changeMassageText} cols="30" rows="2"/>
                <button onClick={sendMassage}>Sent Massage</button>
            </div>
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