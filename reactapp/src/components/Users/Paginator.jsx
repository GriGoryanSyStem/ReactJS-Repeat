import c from "./Users.module.css";
import React, {useState} from "react";

export const Paginator = (props) => {
    let pages = [];
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionSize = 10;
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={c.pagesContainer}>
            <button className={portionNumber > 1 ? '' : `${c.hideMeNow}`} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV
            </button>
            {pages.filter(i => i >= leftPortionPageNumber && i <= rightPortionPageNumber)
                .map((i, k) => {
                    return (
                        <div key={k}>
                            <button onClick={() => {
                                props.clickButton(i)
                            }}
                                    className={props.currentPage === i
                                        ? `${c.selected}  ${c.pageButton}`
                                        : c.pageButton}>{i}
                            </button>
                        </div>
                    )
                })}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
        </div>
    )
}

