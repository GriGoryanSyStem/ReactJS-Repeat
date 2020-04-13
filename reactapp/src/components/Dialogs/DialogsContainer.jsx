import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPageR
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        changeMassageText: (param_e) => {
            dispatch({
                type: 'ADD_NEW_MASSAGE_TEXT',
                massage: param_e
            })
        },
        sendMassage: () => {
            dispatch( {type: 'SEND_MASSAGE'} )
        }
    }
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;