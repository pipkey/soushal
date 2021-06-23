import {AppRootStateType} from "../redux-store";
import {createSelector} from "reselect";

export const getUsersS = (state: AppRootStateType) => {
    return state.usersPage.users
};

export const getUsersSuperSelector = createSelector(getUsersS, (users) => {
    return users
});

export const getPageSizeS = (state: AppRootStateType) => {
    return state.usersPage.pageSize
};
export const getTotalUsersCountS = (state: AppRootStateType) => {
    return state.usersPage.totalItemsCount
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