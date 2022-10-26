import {AppDataType} from './types';
import {AppThunkType} from './redux-store';
import {getAuth} from './auth-reducer';

export type AppActionType = ReturnType<typeof initializedSuccess>

const INITIALIZED_SUCCESS = 'APP/INITIALIZED-SUCCESS'

let initialState = {
    initialized: false
}

const appReducer = (state: AppDataType = initialState, action: AppActionType) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS}) as const

export const initializeApp = (): AppThunkType => (dispatch) => {
    let promise = dispatch(getAuth());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })
}

export default appReducer
