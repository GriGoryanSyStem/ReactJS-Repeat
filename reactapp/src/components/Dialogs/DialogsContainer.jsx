import {connect} from "react-redux";
import React from "react";
import {redirectComponentHoc} from "../HOC/redirectComponentHoc";
import Dialogs from "./Dialogs";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPageR,
        isAuth:state.authR.isAuth,
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



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    redirectComponentHoc)(Dialogs);
