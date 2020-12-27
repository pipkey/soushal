import React from "react";
import UserPhoto from "../../assets/images/user.png.png";
import s from "./users.module.css";
import axios from "axios";
import {UsersType} from "../../redux/users-reducer";

export type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (num: number) => void
    setTotalUsersCount:(totalCount:number)=>void
    currentPage: number
}

class Users extends React.Component<UsersPropsType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanger = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    };

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (<div>
            <div>
                {pages.map(p => <button className={this.props.currentPage === p ? s.selectedPage : ""}
                                        onClick={() => {
                                            this.onPageChanger(p)
                                        }}>
                    {p} </button>)}
            </div>
            {this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small ? u.photos.small : UserPhoto} className={s.photo} alt="sss"/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => this.props.unFollow(u.id)}>UNFOLLOW</button>
                        : <button onClick={() => this.props.follow(u.id)}>FOLLOW</button>}

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
        </div>)

    }
}


export default Users