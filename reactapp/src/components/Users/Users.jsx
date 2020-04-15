import React from "react";
import c from "./Users.module.css";
import axios from "axios";
import personImage from "../../pictures/personUser.png";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                return this.props.setUsers(response.data.items, response.data.totalCount);
            });
    }

    clickButton(pagNumber) {
        this.props.clickPage(pagNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagNumber}&count=${this.props.pageSize}`)
            .then(response => {
                return this.props.setUsers(response.data.items, response.data.totalCount);
            });
    }

    render() {
        let pages = [];
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div className={c.usersContainer}>
                <div className={c.pagesContainer}>
                    {pages.map((i, k) => {
                        return (
                            <button onClick={() => {
                                this.clickButton(i)
                            }} key={k} className={this.props.currentPage === i ? c.selected : ''}>{i}</button>
                        )
                    })}
                </div>
                <div className={c.allUsersContainer}>
                    {this.props.usersReducer.usersData.map((i, k) => {
                        return (
                            <div key={k} className={c.userItem}>
                                <div className={c.userItemImage}>
                                    <div className={c.imageButton}>
                                        <img src={i.photos.small ? i.photos.small : personImage} alt="personImage"/>
                                        <div>
                                            <button className={c.button}
                                                    onClick={(e) => {
                                                        e.currentTarget.innerText === 'Follow'
                                                            ? this.props.followFunc(false, i.id)
                                                            : this.props.followFunc(true, i.id)
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
    }
}

export default Users;