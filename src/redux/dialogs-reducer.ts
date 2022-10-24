import {DialogsPageType} from './types';

export type DialogsActionType = ReturnType<typeof sendMessageCreator>

const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Batman'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Hello'},
                {id: 4, message: 'One'},
                {id: 5, message: 'two'},
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

export default dialogsReducer