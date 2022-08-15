import React from 'react';
import {RootStateType} from '../../redux/store';
import {ActionDialogsTypes, sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch:(action: ActionDialogsTypes) => void) => {
    return {
        updateNewMessageBody: (body:string)=>{
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: ()=>{
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;