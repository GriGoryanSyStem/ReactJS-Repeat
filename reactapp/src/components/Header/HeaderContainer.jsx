import Header from "./Header";
import {connect} from "react-redux";
import {logOutThunk} from "../Redux/authReducer";

let mapStateToProps = (state) => {
    return {
        infoLogin: state.authR.infoLogin,
    }
};

export default connect(mapStateToProps, {logOutThunk})(Header);