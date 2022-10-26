import {AuthDataType} from './types';
import {authAPI, securityAPI} from '../api/api';
import {AppThunkType} from './redux-store';
import {stopSubmit} from 'redux-form';

export type AuthActionType = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaUrlSuccess>

const SET_USER_DATA = 'AUTH/SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = 'AUTH/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state: AuthDataType = initialState, action: AuthActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
}) as const

export const getCaptchaUrlSuccess = (captchaUrl: string) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } })

export const getAuth = (): AppThunkType => async (dispatch) => {
    try {
        let response = await authAPI.me();
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
    catch(e: any) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console')
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string|null) => async (dispatch: any) => {
    try {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuth())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some erorr";
            dispatch(stopSubmit("login", {_error: message}));
        }
    }
    catch(e: any) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console')
    }

}

export const getCaptchaUrl = (): AppThunkType => async (dispatch) => {
    try{
        const response = await securityAPI.getCaptchaUrl();
        const captchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));
    }
    catch(e: any) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console')
    }
}

export const logout = (): AppThunkType => async (dispatch) => {
    try {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
    catch(e: any) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console')
    }
}

export default authReducer
