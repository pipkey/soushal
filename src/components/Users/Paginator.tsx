import React, { useState } from "react"
import s from "./paginator.module.css";


type PaginatorPropsType = {
    onPageChanger: (num: number) => void
    totalItemsCount: number
    pageSize: number
    currentPage: number

}


const Paginator = (props: PaginatorPropsType) => {
    let portionSize = 10
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.paginator}>
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }} > prev </button>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => <button className={props.currentPage === p ? s.selectedPage : ""}
                    onClick={() => {
                        props.onPageChanger(p)
                    }}>
                    {p} </button>)}
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }} >next</button>
            }

        </div>
    )
};

export default Paginator;