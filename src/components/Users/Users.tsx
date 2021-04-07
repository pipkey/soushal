import React from "react"
import s from "./users.module.css";
import UserPhoto from "../../assets/images/user.png.png";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator";


type UsersPropsType = {
    onPageChanger: (num: number) => void
    totalUsersCount: number
    pageSize: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    users: Array<UsersType>
    currentPage: number
    followInProgress: Array<any>
}


const Users = (props: UsersPropsType) => {

    return (
        <div>
            <Paginator onPageChanger={props.onPageChanger}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}/>


            {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={"profile/" + u.id}>
                        <img src={u.photos.small ? u.photos.small : UserPhoto} className={s.photo} alt="sss"/>
                    </NavLink>
                </div>
                <div className="BTN">
                    {u.followed
                        ? <button disabled={props.followInProgress.some(id => id === u.id)}
                                  onClick={() => props.unFollow(u.id)}> UNFOLLOW </button>

                        : <button disabled={props.followInProgress.some(id => id === u.id)}
                                  onClick={() => props.follow(u.id)}> FOLLOW</button>
                    }
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