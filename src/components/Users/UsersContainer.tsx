import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {
    follow,
    getUsers,
    setCurrentPage,
    unFollow,
    UsersType
} from "../../redux/users-reducer";
import Users from "./Users";
import preloader from "../../assets/images/grid.svg"

//types
export type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
    setCurrentPage: (num: number) => void
    currentPage: number
    isFetching: boolean
    followInProgress: Array<any>
    getUsers: (pageSize: number, currentPage: number) => void
}

type MapStatPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followInProgress: Array<any>
};
//end types

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount(): void {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    onPageChanger = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    };

    render() {
        return <>
            {this.props.isFetching ? <img src={preloader}/> : null}
            <Users
                onPageChanger={this.onPageChanger}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                users={this.props.users}
                currentPage={this.props.currentPage}
                followInProgress={this.props.followInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: RootStateType): MapStatPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followingInProgress
    }
};

export default connect(mapStateToProps,
    {
        follow, unFollow, setCurrentPage, getUsers
    })(UsersContainer);

