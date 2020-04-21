import React from "react";
import c from "./Users.module.css";
import personImage from "../../pictures/personUser.png";
import Loader from "../Common/Loader";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pages = [];
    let pagesCount = Math.ceil(props.usersReducer.totalUsersCount / props.usersReducer.pageSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={c.usersContainer}>
            <div className={c.pagesContainer}>
                {pages.map((i, k) => {
                    return (
                        <button onClick={() => {
                            props.clickButton(i)
                        }} key={k} className={props.usersReducer.currentPage === i ? `${c.selected} ${c.pageButton}` : c.pageButton}>{i}</button>
                    )
                })}
            </div>
            <div className={c.allUsersContainer}>
                {props.usersReducer.isLoading
                    ? <Loader/>
                    : props.usersReducer.usersData.map((i, k) => {
                        return (
                            <div key={k} className={c.userItem}>
                                <div className={c.userItemImage}>
                                    <div className={c.imageButton}>
                                        <NavLink to = {`profile/${i.id}`}>
                                            <img src={i.photos.small ? i.photos.small : personImage} alt="personImage"/>
                                        </NavLink>
                                       <div>
                                            <button className={c.myButton}
                                                    onClick={(e) => {
                                                        e.currentTarget.innerText === 'Follow'
                                                            ? props.followAC(false, i.id)
                                                            : props.followAC(true, i.id)
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
        </div>
    )
};

export default Users;