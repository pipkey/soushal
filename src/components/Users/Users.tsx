import React from "react";
import {UsersType} from "../../redux/users-reducer";
import s from "./users.module.css"
import {imgObj} from "../../redux/store";

type UsersPropsType = {
    users: Array<UsersType>
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
    setUsers: (users: Array<UsersType>) => void

}

const Users: React.FC<UsersPropsType> = (props) => {

    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoURL: imgObj.img4,
                fullName: "Philip",
                status: "love life",
                followed: false,
                location: {city: "Mogilev", country: "Belarus"}
            },
            {
                id: 2,
                photoURL: imgObj.img3,
                fullName: "Sergo",
                status: "my song",
                followed: true,
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 3,
                photoURL: imgObj.img1,
                fullName: "Pavel",
                status: "be creative",
                followed: false,
                location: {city: "St.Peterburg", country: "Russia"}
            },
            {
                id: 4,
                photoURL: imgObj.img2,
                fullName: "Denis",
                status: "reading",
                followed: true,
                location: {city: "Pinsk", country: "Belarus"}
            },
        ]);
    }

    return (<div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoURL} className={s.photo} alt="sss"/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => props.unFollow(u.id)}>UNFOLLOW</button>
                        : <button onClick={() => props.follow(u.id)}>FOLLOW</button>}

                </div>
            </span>
            <span>
                    <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
        </div>)
        }
    </div>)
};


export default Users;