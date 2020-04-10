import React from "react";
import Dialogs from "./Dialogs";

class DialogsContainer extends React.Component {
    render() {
        let changeMassageText = (param_e) => {
            this.props.dispatch({
                type: 'ADD_NEW_MASSAGE_TEXT',
                massage: param_e
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
            <Dialogs changeMassageText = {changeMassageText}
                     sendMassage = {sendMassage}
                     dialogsData = {this.props.dialogPage.dialogsData}
                     massagesData={this.props.dialogPage.massagesData}
                     newMessageTextArea = {this.props.dialogPage.newMessageTextArea}/>
        )
    }
}

export default DialogsContainer;