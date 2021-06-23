import { Dispatch } from "redux";
import { ResultCodes, usersAPI } from "../api/api";
import { BaseThunkType } from "./redux-store";
import { helperObj } from "../utills/Helper";


// AC type bind
export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_USER_TOTAL_COUNT = "SET_USER_TOTAL_COUNT";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const TOOGLE_IS_FOLLOWING = "TOOGLE_IS_FOLLOWING ";

//Types of action
export type UsersActionTypes =
    ReturnType<typeof unFollowSucsess> |
    ReturnType<typeof followSucsess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setUserTotalCount> |
    ReturnType<typeof toogleIsFetching> |
    ReturnType<typeof toogleIsFollowing>


//types
type ThunkType = BaseThunkType<UsersActionTypes>
export type InitialType = {
    users: Array<UsersType>
    pageSize: number,
    totalItemsCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
}
export type UsersType = {
    id: number
    photos: photosType
    name: string
    followed: boolean
    status: string
    // location: LocationType
}
type photosType = {
    small: string
    large?: string
}
// type LocationType = {
//     city: string
//     country: string
// }

let InitialState: InitialType = {
    users: [],
    pageSize: 5,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};


const usersReducer = (state = InitialState, action: UsersActionTypes) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: helperObj(state.users, action.userId, "id", { followed: true })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: helperObj(state.users, action.userId, "id", { followed: false })
            }
        }
        case SET_USERS:
            return { ...state, users: action.users };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case SET_USER_TOTAL_COUNT:
            return { ...state, totalItemsCount: action.totalCount };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        case TOOGLE_IS_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state
    }
};


// Action Creators
export const followSucsess = (userId: number) => ({ type: FOLLOW, userId } as const);
export const unFollowSucsess = (userId: number) => ({ type: UNFOLLOW, userId } as const);
export const setUsers = (users: Array<UsersType>) => ({ type: SET_USERS, users } as const);
export const setCurrentPage = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const);
export const setUserTotalCount = (totalCount: number) => ({ type: SET_USER_TOTAL_COUNT, totalCount } as const);
//loading
export const toogleIsFetching = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching } as const);
export const toogleIsFollowing = (followingInProgress: boolean, userId: number) =>
    ({ type: TOOGLE_IS_FOLLOWING, followingInProgress, userId } as const);


//Thunk
export const getUsers = (pageSize: number, currentPage: number) => async (dispatch: Dispatch) => {
    dispatch(toogleIsFetching(true));
    let data = await usersAPI.getUsers(pageSize, currentPage);

    dispatch(toogleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setUserTotalCount(data.totalCount))
};

const followUnfollowFlow = async (dispatch: Dispatch,
    userId: number,
    apiMethod: (userId: number) => Promise<any>,
    actionCreator: (userId: number) => UsersActionTypes) => {

    dispatch(toogleIsFollowing(true, userId));
    let response = await apiMethod(userId);
    if (response.resultCode === ResultCodes.Success) {
        dispatch(actionCreator(userId));
    }
    dispatch(toogleIsFollowing(false, userId))
};

export const unFollow = (userId: number): ThunkType => async (dispatch: Dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.UnFollowUsers.bind(usersAPI), unFollowSucsess)
};

export const follow = (userId: number): ThunkType => async (dispatch: Dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.FollowUsers.bind(usersAPI), followSucsess)
};




export default usersReducer;