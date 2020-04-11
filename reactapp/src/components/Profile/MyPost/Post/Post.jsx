import React from "react";
import c from '../../Profile.module.css'
import pic from "../../../../pictures/person-icon-8.png"

const Posts = (props) => {
    return (
        <div>
            <div className={c.post}>
                <img src={pic} alt=""/>
                <span>{props.massage}</span>
            </div>
            <div>{`${props.id}. Like ${props.likes}`}</div>
        </div>
    )
};
export default Posts;