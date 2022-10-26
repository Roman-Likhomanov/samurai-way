import {UsersPageType, UsersType} from './types';
import {usersAPI} from '../api/api';
import {updateObjectInArray} from '../utils/object-helpers';

export type UsersActionType =
    ReturnType<typeof followSuccess>
    |
    ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    |
    ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

const FOLLOW = 'USERS/FOLLOW'
const UNFOLLOW = 'USERS/UNFOLLOW'
const SET_USERS = 'USERS/SET-USERS'
const SET_CURRENT_PAGE = 'USERS/SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'USERS/SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'USERS/TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'USERS/TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state: UsersPageType = initialState, action: UsersActionType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: updateObjectInArray(state.users, action.userId, "id", {followed:true})
            }
        case UNFOLLOW:
            return {
                ...state, users: updateObjectInArray(state.users, action.userId, "id", {followed:false})
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId: number) => ({type: FOLLOW, userId}) as const
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId}) as const
export const setUsers = (users: Array<UsersType>) => ({type: SET_USERS, users}) as const
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}) as const
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching, userId
}) as const

export const requestUsers = (page: number, pageSize: number) => async (dispatch: (action: UsersActionType) => void) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    try {
        let response = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))
    }
    catch(e: any) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console')
    }
}

let followUnfollowFlow = async (dispatch: (action: UsersActionType) => void, userId: number,
                                apiMethod: any, actionCreator: (userId: number) => UsersActionType) => {
    dispatch(toggleFollowingProgress(true, userId))
    try {
        let response = await apiMethod(userId);
        if (response.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
    catch(e: any) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console')
    }
}

export const follow = (userId: number) => {
    return async (dispatch: (action: UsersActionType) => void) => {
        followUnfollowFlow(dispatch, userId, usersAPI.getFollow.bind(usersAPI), followSuccess);
    }
}

export const unfollow = (userId: number) => {
    return async (dispatch: (action: UsersActionType) => void) => {
        followUnfollowFlow(dispatch, userId, usersAPI.getUnfollow.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReducer
