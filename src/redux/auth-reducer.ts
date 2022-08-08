import {AuthDataType, UsersPageType, UsersType} from './store';

export type ActionUsersTypes = ReturnType<typeof setAuthUserData>

const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: AuthDataType = initialState, action: ActionUsersTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string) => ({type: SET_USER_DATA, data:{userId, email, login}}) as const

export default authReducer
