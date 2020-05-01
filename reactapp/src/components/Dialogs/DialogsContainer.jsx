import {connect} from "react-redux";
import {redirectComponentHoc} from "../HOC/redirectComponentHoc";
import {compose} from "redux";
import Dialogs from "./Dialogs";
import {sendMassageAC} from "../Redux/dialogReducer";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPageR,
        isAuth:state.authR.isAuth
    }
};

export default compose(connect(mapStateToProps, {sendMassageAC}),redirectComponentHoc)(Dialogs);
