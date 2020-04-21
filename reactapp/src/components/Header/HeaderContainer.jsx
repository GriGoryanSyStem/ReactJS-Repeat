import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import axios from "axios";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = {...response.data.data};
                    return this.props.setLoginAuth(id, login, email);
                }
            });
    }

    render() {
        return (
            <Header {...this.props} loginImage = {this.props.loginImage}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        store: state.authR,
        loginImage:state.profilePageR.profile
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setLoginAuth: (id, login, email) => dispatch(
            {
                type: 'SET_LOGIN_AUTH',
                infoLogin: {
                    id: id,
                    login: login,
                    email: email
                }
            }
        ),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);