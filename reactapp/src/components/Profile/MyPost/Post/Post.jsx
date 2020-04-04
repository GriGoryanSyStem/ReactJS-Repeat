import React from "react";
import c from './Post.module.css'
import pic from "../../../../pictures/person-icon-8.png"

const MyPosts = () => {
    console.log(c);
    return (
        <div>
        <div className={c.post}><img src={pic} alt=""/><span>post1</span></div>
        <div>Like</div>
        </div>
    )
};
export default MyPosts;