import React from 'react';
import {RootStateType} from '../../redux/types';
import {sendMessageTC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {ActionsType, AppStateType} from '../../redux/redux-store';

type mapDispatchToPropsType = {
    sendMessage: (newMessageBody: string) => void
}

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch:ThunkDispatch<AppStateType, unknown, ActionsType>):mapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody: string)=>{
            dispatch(sendMessageTC(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)