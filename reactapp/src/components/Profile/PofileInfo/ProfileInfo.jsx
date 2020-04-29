import React from "react";
import c from "../Profile.module.css";
import Loader from "../../Common/Loader";
import userImage from '../../../pictures/personUser.png';

class ProfileInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            text:'Yerevan'
        }
    }
    changeStatus = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }
    changeInputText = (e) =>{
        this.setState({
            text: e.target.value
        })
    }

    render() {
        if (!this.props.profile) {
            return <Loader/>
        }
        return (
            <div className={c.profileInfo}>
                <h1>Profile Information</h1>
                <div className={c.item}>
                    <img src={!this.props.profile.photos.large ? userImage : this.props.profile.photos.large}
                         alt="userPhoto"/>

                    <div className={c.statusContainer}>
                        {!this.state.editMode &&
                        <div>
                            <span onClick={this.changeStatus}>{this.state.text}</span>
                        </div>}
                        {this.state.editMode &&
                        <div>
                            <input onChange={this.changeInputText} autoFocus={true} onBlur={this.changeStatus} value={this.state.text}/>
                        </div>}
                    </div>
                    <h2>{this.props.profile.fullName}</h2>
                    <h3>{this.props.profile.userId}</h3>
                    <h4>{this.props.profile.lookingForAJob}</h4>
                    <h5>{this.props.profile.lookingForAJobDescription}</h5>
                </div>
            </div>
        )
    }
}

export default ProfileInfo;