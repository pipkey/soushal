import {AppRootStateType} from "../redux-store";

export const getUsersS = (state: AppRootStateType) => {
    return state.usersPage.users
};
export const getPageSizeS = (state: AppRootStateType) => {
    return state.usersPage.pageSize
};
export const getTotalUsersCountS = (state: AppRootStateType) => {
    return state.usersPage.totalUsersCount
};
export const getCurrentPageS = (state: AppRootStateType) => {
    return state.usersPage.currentPage
};
export const getIsFetchingS = (state: AppRootStateType) => {
    return state.usersPage.isFetching
};
export const getFollowInProgressS = (state: AppRootStateType) => {
    return state.usersPage.followingInProgress
};