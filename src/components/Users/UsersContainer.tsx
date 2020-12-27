import React from "react";
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
import axios from "axios";
import Users from "./Users";

//types
export type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (num: number) => void
    setTotalUsersCount: (totalCount: number) => void
    currentPage: number
}
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
//end types

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
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
        return <Users
            onPageChanger={this.onPageChanger}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            users={this.props.users}
            currentPage={this.props.currentPage}
        />

    }
}

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

export default  connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

