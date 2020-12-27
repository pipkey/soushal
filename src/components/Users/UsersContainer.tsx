import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {dispatchType} from "../../redux/redux-store";
import {
    followAC,
    RootStateType,
    setCurrentPageAC,
    setUsersAC,
    setUserTotalCountAC,
    unFollowAC
} from "../../redux/store";
import {UsersType} from "../../redux/users-reducer";

type MapStatPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
};
type MapDispPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (num: number) => void
    setTotalUsersCount: (totalCount: number) => void
};


const mapStateToProps = (state: RootStateType): MapStatPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};
const mapDispatchToProps = (dispatch: dispatchType): MapDispPropsType => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unFollow: (userId: number) => dispatch(unFollowAC(userId)),
        setUsers: (users: Array<UsersType>) => dispatch(setUsersAC(users)),
        setCurrentPage: (num: number) => dispatch(setCurrentPageAC(num)),
        setTotalUsersCount:(totalCount:number)=> dispatch(setUserTotalCountAC(totalCount))
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;