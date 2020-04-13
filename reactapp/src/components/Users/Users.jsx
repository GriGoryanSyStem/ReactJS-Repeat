import React from "react";
import c from "./Users.module.css";

const Users = (props) => {
    return (
        <div className={c.usersContainer}>
            {props.usersReducer.usersData.map((i, k) => {
                return (
                    <div key={k} className={c.userItem}>
                        <div className={c.userItemImage}>
                            <img src={i.userImg} alt=""/>
                            <button className={c.button}
                                    onClick={(e) => {
                                        e.currentTarget.innerText === 'Follow'
                                            ? props.followFunc(false, i.id)
                                            : props.followFunc(true, i.id)
                                    }}>{i.followed ? 'Follow' : "UnFollow"}
                            </button>
                        </div>
                        <div>Name : {i.name}</div>
                        <div>Status : {i.status}</div>
                        <div>Country : {i.location.country}</div>
                        <div>City : {i.location.city}</div>
                    </div>
                )
            })}
        </div>
    )
};
export default Users;