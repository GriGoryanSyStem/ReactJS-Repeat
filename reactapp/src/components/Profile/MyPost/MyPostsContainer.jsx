import {connect} from "react-redux";
import {onChangeAreaAC} from "../../Redux/profileReducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        postData: state.profilePageR.postData,
    }
};

export default connect(mapStateToProps, {onChangeAreaAC})(MyPosts);



