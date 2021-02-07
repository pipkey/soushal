import {
    AllActionTypes,
    FOLLOW,
    SET_CURRENT_PAGE,
    SET_USER_TOTAL_COUNT,
    SET_USERS,
    TOGGLE_IS_FETCHING, TOOGLE_IS_FOLLOWING,
    UNFOLLOW,

} from "./store";


export type InitialType = {
    users: Array<UsersType>
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching:boolean
    followingInProgress:Array<any>
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
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [ ]
};


const usersReducer = (state = InitialState, action: AllActionTypes) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_USER_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOOGLE_IS_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id=> id !== action.userId)};
        default:
            return state
    }
};

export default usersReducer;