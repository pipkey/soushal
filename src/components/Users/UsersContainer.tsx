import React from "react";
import {connect} from "react-redux";
import {
    follow,
    RootStateType,
    setCurrentPage,
    setUsers,
    setUserTotalCount,
    toogleIsFetching,
    unFollow
} from "../../redux/store";
import {UsersType} from "../../redux/users-reducer";
import Users from "./Users";
import preloader from "../../assets/images/grid.svg"
import {getUsers} from "../../api/api";

//types
export type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (num: number) => void
    setUserTotalCount: (totalCount: number) => void
    currentPage: number
    isFetching: boolean
    toogleIsFetching: (isFetching: boolean) => void
}
type MapStatPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
};

//end types

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount(): void {
        this.props.toogleIsFetching(true);
        getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                debugger;
                this.props.toogleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setUserTotalCount(data.totalCount)
            })
    }

    onPageChanger = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toogleIsFetching(true);
        getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                debugger;
                this.props.toogleIsFetching(false);
                this.props.setUsers(data.items)
            })
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
        isFetching: state.usersPage.isFetching
    }
};
// const mapDispatchToProps = (dispatch: dispatchType): MapDispPropsType => {
//     return {
//         follow: (userId: number) => dispatch(followAC(userId)),
//         unFollow: (userId: number) => dispatch(unFollowAC(userId)),
//         setUsers: (users: Array<UsersType>) => dispatch(setUsersAC(users)),
//         setCurrentPage: (num: number) => dispatch(setCurrentPageAC(num)),
//         setTotalUsersCount: (totalCount: number) => dispatch(setUserTotalCountAC(totalCount)),
//         toogleIsFetching: (isFetching:boolean) => dispatch(toogleIsFetchingAC(isFetching))
//     }
// };

export default connect(mapStateToProps,
    {
        follow, unFollow, setUsers,
        setCurrentPage, setUserTotalCount, toogleIsFetching
    })(UsersContainer);

