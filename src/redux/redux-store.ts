import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer, {ProfileActionType} from './profile-reducer';
import dialogsReducer, {DialogsActionType} from './dialogs-reducer';
import usersReducer, {UsersActionType} from './users-reducer';
import authReducer, {AuthActionType} from './auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof reducers>

export type ActionsType =
    | AuthActionType
    | DialogsActionType
    | ProfileActionType
    | UsersActionType

export type AppThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>


export default store;