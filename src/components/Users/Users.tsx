import React from "react"
import s from "./users.module.css";
import UserPhoto from "../../assets/images/user.png.png";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    onPageChanger: (num: number) => void
    totalUsersCount: number
    pageSize: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    users: Array<UsersType>
    currentPage: number
}


const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => <button className={props.currentPage === p ? s.selectedPage : ""}
                                        onClick={() => {
                                            props.onPageChanger(p)
                                        }}>
                    {p} </button>)}
            </div>
            {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={"profile/" + u.id}>
                        <img src={u.photos.small ? u.photos.small : UserPhoto} className={s.photo} alt="sss"/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                {withCredentials:true,
                                    headers: {
                                    "API-KEY": "c0b41f08-198a-4e54-8351-7c86337bdf85"
                                    }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0){
                                        props.unFollow(u.id)
                                    }
                                });

                        }}>UNFOLLOW</button>

                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                withCredentials:true,
                                headers: {
                                    "API-KEY": "c0b41f08-198a-4e54-8351-7c86337bdf85"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0){
                                        props.follow(u.id)
                                    }
                                });

                        }}>FOLLOW</button>}

                </div>
            </span>
                <span>
                    <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
            }
        </div>
    )
};

export default Users;