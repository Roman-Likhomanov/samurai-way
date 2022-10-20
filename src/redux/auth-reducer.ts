import {AuthDataType} from './store';
import {authAPI} from '../api/api';
import {AppThunkType} from './redux-store';
import {stopSubmit} from 'redux-form';

export type AuthActionType = ReturnType<typeof setAuthUserData>

const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: AuthDataType = initialState, action: AuthActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number|null, email: string|null, login: string|null, isAuth: boolean) => ({type: SET_USER_DATA, payload:{userId, email, login, isAuth}}) as const

export const getAuth = (): AppThunkType => {
    return (dispatch) => {
        return authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {

        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuth())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
}

export const logout = (): AppThunkType => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

export default authReducer
