import {AuthDataType, UsersPageType, UsersType} from './store';
import {ActionDialogsTypes} from './dialogs-reducer';
import {ActionProfileTypes} from './profile-reducer';
import {usersAPI} from '../api/api';
import {setTotalUsersCount, setUsers, toggleIsFetching} from './users-reducer';

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

export const getAuth = () => {
    return (dispatch: (action: ActionUsersTypes) => void) => {
        usersAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}


export default authReducer
