import c from "./Users.module.css";
import React from "react";

export const Paginator = (props) => {
    let pages = [];
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return(
        <div className={c.pagesContainer}>
            {pages.map((i, k) => {
                return (
                    <div key={k}>
                        <button onClick={() => {props.clickButton(i)}}
                                className={props.currentPage === i
                                    ? `${c.selected}  ${c.pageButton}`
                                    : c.pageButton}>{i}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

