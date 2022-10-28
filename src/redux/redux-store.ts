import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import profileReducer, {ProfileActionType} from './profile-reducer';
import dialogsReducer, {DialogsActionType} from './dialogs-reducer';
import usersReducer, {UsersActionType} from './users-reducer';
import authReducer, {AuthActionType} from './auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';
import appReducer, {AppActionType} from './app-reducer';
import {TypedUseSelectorHook, useSelector} from 'react-redux';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export type AppStateType = ReturnType<typeof reducers>

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector

export type ActionsType =
    | AuthActionType
    | AppActionType
    | DialogsActionType
    | ProfileActionType
    | UsersActionType

export type AppThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>


export default store;