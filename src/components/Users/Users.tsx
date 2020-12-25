import React from "react";
import UserPhoto from "../../assets/images/user.png.png";
import s from "./users.module.css";
import axios from "axios";
import {UsersType} from "../../redux/users-reducer";

export type UsersPropsType = {
    users: Array<UsersType>
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

class Users extends React.Component<UsersPropsType> {

    constructor(props:UsersPropsType){
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return (<div>
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