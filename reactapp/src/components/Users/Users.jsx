import React from "react";
import c from "./Users.module.css";
import personImage from "../../pictures/personUser.png";
import Loader from "../Common/Loader";
import {NavLink} from "react-router-dom";
import {Paginator} from "./Paginator";

const Users = (props) => {
    return (
        <div className={c.usersContainer}>
            <div className={c.allUsersContainer}>
                {props.usersReducer.isLoading
                    ? <Loader/>
                    : props.usersReducer.usersData.map((i, k) => {
                        return (
                            <div key={k} className={c.userItem}>
                                <div className={c.userItemImage}>
                                    <div className={c.imageButton}>
                                        <NavLink to={`profile/${i.id}`}>
                                            <img src={i.photos.small ? i.photos.small : personImage} alt="personImage"/>
                                        </NavLink>
                                        <div>
                                            <button
                                                disabled={props.usersReducer.isFollowing.some(elem => elem === i.id)}
                                                className={c.myButton}
                                                onClick={(e) => {
                                                    if (e.currentTarget.innerText === 'Follow') {
                                                        props.followThunk(i.id);
                                                    } else {
                                                        props.unFollowThunk(i.id);
                                                    }
                                                }}>{i.followed ? 'Follow' : "UnFollow"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>User ID : {i.id}</div>
                                <div>Name : {i.name}</div>
                                <div className={c.status}>Status : {i.status}</div>
                            </div>
                        )
                    })}
            </div>
            <div>
                <Paginator totalUsersCount={props.usersReducer.totalUsersCount}
                           pageSize={props.usersReducer.pageSize}
                           currentPage={props.usersReducer.currentPage}
                           clickButton={props.clickButton}/>
            </div>
        </div>
    )
};

export default Users;