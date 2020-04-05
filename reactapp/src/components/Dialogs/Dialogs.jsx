import React from "react";
import c from "./Dialogs.module.css"

const Dialogs = () =>{
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>
                <div className={`${c.dialog} ${c.active}`}>Dina</div>
                <div className={c.dialog}>Valeria</div>
                <div className={c.dialog}>Sasha</div>
                <div className={c.dialog}>Andrey</div>
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