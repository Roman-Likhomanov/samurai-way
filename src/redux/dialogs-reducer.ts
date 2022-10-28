import {DialogsPageType} from './types';
import {v1} from 'uuid';
import {AppThunkType} from './redux-store';
import {reset} from 'redux-form';

export type DialogsActionType = ReturnType<typeof sendMessageCreator>

const SEND_MESSAGE = 'DIALOGS/SEND-MESSAGE'

let initialState = {
            dialogs: [
                {id: v1(), name: 'John'},
                {id: v1(), name: 'Hanna'},
                {id: v1(), name: 'Bob'},

            ],
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How are you?'},
                {id: v1(), message: 'Hello'}
            ]
        }


const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionType) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody}) as const

export const sendMessageTC = (newMessageBody:string): AppThunkType => (dispatch) => {
    dispatch(sendMessageCreator(newMessageBody))
    dispatch(reset('dialogAddMessageForm'))
}

export default dialogsReducer