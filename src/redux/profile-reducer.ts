import {PostsType, ProfilePageType, ProfileType} from './types';
import {profileAPI, usersAPI} from '../api/api';
import {AppThunkType} from './redux-store';
import { stopSubmit } from 'redux-form';

export type ProfileActionType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>

const ADD_POST = 'PROFILE/ADD-POST'
const SET_USER_PROFILE = 'PROFILE/SET-USER-PROFILE'
const SET_STATUS = 'PROFILE/SET-STATUS'
const DELETE_POST = 'PROFILE/DELETE-POST'
const SAVE_PHOTO_SUCCESS = 'PROFILE/SAVE-PHOTO-SUCCESS'

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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            };
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText}) as const
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile}) as const
export const setStatus = (status: string) => ({type: SET_STATUS, status}) as const
export const deletePost = (postId: number) => ({type: DELETE_POST, postId}) as const
export const savePhotoSuccess = (photos: any) => ({type: SAVE_PHOTO_SUCCESS, photos}) as const

export const getProfile = (userId: string) => async (dispatch: (action: ProfileActionType) => void) => {
    try {
        let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response))
    }
    catch(e: any) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console')
    }
}

export const getStatus = (userId: string) => async (dispatch: (action: ProfileActionType) => void) => {
    try {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response))
    }
    catch(e: any) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console')
    }
}

export const updateStatus = (status: string) => async (dispatch: (action: ProfileActionType) => void) => {
    try {
        let response = await profileAPI.updateStatus(status)
        if (response.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
    catch(e: any) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console')
    }
}

export const savePhoto = (file: any) => async (dispatch: (action: ProfileActionType) => void) => {
    try {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    }
    catch(e: any) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console')
    }
}

export const saveProfile = (profile: ProfileType): AppThunkType => async (dispatch, getState) => {
    try {
        const userId = getState().auth.userId;
        const response = await profileAPI.saveProfile(profile)
        if (response.data.resultCode === 0) {
            dispatch(getProfile(String(userId)));
        } else {
            dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
            return Promise.reject(response.data.messages[0]);
        }
    }
    catch(e: any) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console')
    }
}

export default profileReducer
