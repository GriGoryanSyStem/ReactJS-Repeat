import React from "react";
import c from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItems";
import Massage from "./Massage/Massage";

class Dialogs extends React.Component {
    render() {
        let changeMassageText = (e) => {
            this.props.dispatch({
                type: 'ADD_NEW_MASSAGE_TEXT',
                massage: e.target.value
            });
            this.forceUpdate();  // class component that could call forceUpdate();
        };
        let sendMassage = () => {
            this.props.dispatch({
                type: 'SEND_MASSAGE',
            });
            this.forceUpdate(); // class component that could call forceUpdate();
        };

        return (
            <div className={c.dialogs}>
                <div className={c.textAreaButton}>
                    <textarea value={this.props.dialogPage.newMessageTextArea} onChange={changeMassageText} cols="30" rows="2"/>
                    <button onClick={sendMassage}>Sent Massage</button>
                </div>
                <div className={c.dialogsItem}>
                    {this.props.dialogPage.dialogsData.map((i, k) => {
                        return (
                            <DialogItem name={i.name} id={i.id} key={k}/>
                        )
                    })}
                </div>
                <div className={c.massagesItem}>
                    {this.props.dialogPage.massagesData.map((i, k) => {
                        return (
                            <Massage massage={i.massage} id={i.id} key={k}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Dialogs;