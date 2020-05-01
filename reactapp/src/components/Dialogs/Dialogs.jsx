import React from "react";
import c from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItems";
import Massage from "./Massage/Massage";
import {Field, reduxForm} from "redux-form";

let DialogAddMassageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={c.textAreaButton}>
                <Field component='textarea' name={'newMassageTextArea'} cols="30" rows="2"/>
                <button>Sent Massage</button>
            </div>
        </form>
    )
}

DialogAddMassageForm = reduxForm({form: 'dialogAddMassageForm'})(DialogAddMassageForm);

const Dialogs = (props) => {

    const addNewMassage = (values) => {
        props.sendMassageAC(values.newMassageTextArea);
    };

    return (
        <div className={c.dialogs}>
            <DialogAddMassageForm onSubmit={addNewMassage}/>
            <div className={c.dialogsItem}>
                {
                    props.dialogPage.dialogsData.map((i, k) => {
                        return <DialogItem name={i.name} id={i.id} key={k}/>
                    })
                }
            </div>
            <div className={c.massagesItem}>
                {
                    props.dialogPage.massagesData.map((i, k) => {
                        return <Massage massage={i.massage} id={i.id} key={k}/>
                    })
                }
            </div>
        </div>
    )
};

export default Dialogs;