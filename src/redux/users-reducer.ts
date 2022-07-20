import {ActionTypes, PostsType, ProfilePageType, UsersPageType, UsersType} from './store';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'


let initialState = {
    users: [    ]
}

const usersReducer = (state: UsersPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(el=> el.id === action.userId ? {...el, followed:true} : el)
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(el=> el.id === action.userId ? {...el, followed:false} : el)
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId:number) => ({type: FOLLOW, userId}) as const
export const unfollowAC = (userId:number) => ({type: UNFOLLOW, userId}) as const
export const setUsersAC = (users:Array<UsersType>) => ({type: SET_USERS, users}) as const

export default usersReducer
