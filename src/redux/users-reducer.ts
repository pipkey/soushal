import {AllActionTypes, FOLLOW, UNFOLLOW, SET_USERS, imgObj} from "./store";



export type InitialType = {
    users: Array<UsersType>
}
 export type UsersType = {
    id: number
     photoURL:string
    fullName: string
    followed:boolean
    status: string
    location: LocationType
}
type LocationType = {
    city: string
    country: string
}

let InitialState:InitialType = {
    users: []
};


const usersReducer = (state = InitialState, action: AllActionTypes) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS:
        return { ...state, users: [ ...state.users, ...action.users]};
        default:
            return state
    }
};

export default usersReducer;