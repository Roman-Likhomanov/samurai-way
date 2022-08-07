import {UsersPageType, UsersType} from './store';

export type ActionUsersTypes = ReturnType<typeof follow>|
    ReturnType<typeof unfollow>|ReturnType<typeof setUsers>|ReturnType<typeof setCurrentPage>|
    ReturnType<typeof setTotalUsersCount>|ReturnType<typeof toggleIsFetching>

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

const usersReducer = (state: UsersPageType = initialState, action: ActionUsersTypes) => {
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
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const follow = (userId:number) => ({type: FOLLOW, userId}) as const
export const unfollow = (userId:number) => ({type: UNFOLLOW, userId}) as const
export const setUsers = (users:Array<UsersType>) => ({type: SET_USERS, users}) as const
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}) as const

export default usersReducer
