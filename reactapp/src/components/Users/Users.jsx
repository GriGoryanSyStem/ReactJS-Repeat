import React from "react";
import c from "./Users.module.css";
import axios from "axios";
import img from "../../pictures/personUser.png";

const Users = (props) => {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            return props.setUsers(response.data.items);
        });

    return (
        <div className={c.usersContainer}>
            {props.usersReducer.usersData.map((i, k) => {
                return (
                    <div key={k} className={c.userItem}>
                        <div className={c.userItemImage}>
                            <div className={c.imageButton}>
                                <img src={i.photos.small ? i.photos.small : img} alt="photo"/>
                               <div>
                                <button className={c.button}
                                        onClick={(e) => {
                                            e.currentTarget.innerText === 'Follow'
                                                ? props.followFunc(false, i.id)
                                                : props.followFunc(true, i.id)
                                        }}>{i.followed ? 'Follow' : "UnFollow"}
                                </button>
                               </div>
                            </div>
                        </div>
                        <div>User ID : {i.id}</div>
                        <div>Name : {i.name}</div>
                        <div>Status : {i.status}</div>
                    </div>
                )
            })}
        </div>
    )
};
export default Users;