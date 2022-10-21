import {PostsType, ProfilePageType, ProfileType} from './store';
import {profileAPI, usersAPI} from '../api/api';

export type ProfileActionType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE-POST'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 10},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostsType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(p => p.id != action.postId)
            };
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText}) as const
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile}) as const
export const setStatus = (status: string) => ({type: SET_STATUS, status}) as const
export const deletePost = (postId: number) => ({type: DELETE_POST, postId}) as const

export const getProfile = (userId: string) => async (dispatch: (action: ProfileActionType) => void) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response))
}

export const getStatus = (userId: string) => async (dispatch: (action: ProfileActionType) => void) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))
}

export const updateStatus = (status: string) => async (dispatch: (action: ProfileActionType) => void) => {
    let response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer
