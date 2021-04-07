import React from "react"
import s from "./paginator.module.css";


type PaginatorPropsType = {
    onPageChanger: (num: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number

}


const Paginator = (props: PaginatorPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
            <div>
                {pages.map(p => <button className={props.currentPage === p ? s.selectedPage : ""}
                                        onClick={() => {
                                            props.onPageChanger(p)
                                        }}>
                    {p} </button>)}
            </div>

    )
};

export default Paginator;