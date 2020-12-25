import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {dispatchType} from "../../redux/redux-store";
import {followAC, RootStateType, setUsersAC, unFollowAC} from "../../redux/store";
import {UsersType} from "../../redux/users-reducer";

type MapStatPropsType = {
    users: Array<UsersType>
};
type MapDispPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
};


const mapStateToProps = (state: RootStateType): MapStatPropsType => {
    return {
        users: state.usersPage.users
    }
};
const mapDispatchToProps = (dispatch: dispatchType): MapDispPropsType => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unFollow: (userId: number) => dispatch(unFollowAC(userId)),
         setUsers: (users: Array<UsersType>) => dispatch(setUsersAC(users)),
    }
};

const UsersContainer  = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;