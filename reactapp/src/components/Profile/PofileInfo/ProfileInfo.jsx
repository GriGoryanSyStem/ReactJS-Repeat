import React from "react";
import c from "../Profile.module.css";
import Loader from "../../Common/Loader";
import userImage from '../../../pictures/personUser.png';

class ProfileInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            status:this.props.status,
        }
    }
    changeStatus = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        this.props.updateStatusThunk(this.state.status);
    }
    changeStatusText = (e) =>{
        this.setState({
            status:e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
       if (prevProps.status!==this.props.status){
           this.setState({
               status:this.props.status
           })
       }
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
                            <p onClick={this.changeStatus}>{this.props.status ? this.props.status : 'No Status'}</p>
                        </div>}
                        {this.state.editMode &&
                        <div>
                            <input value={this.state.status}
                                   onChange={this.changeStatusText}
                                   autoFocus={true}
                                   onBlur={this.changeStatus}
                                   />
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