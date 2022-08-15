import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message'
import {DialogsPageType} from '../../redux/store';
import {Redirect} from 'react-router-dom';

type DialogsPropsType = {
    updateNewMessageBody: (body:string)=>void
    sendMessage: ()=>void
    dialogsPage: DialogsPageType
    isAuth: boolean
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
    }

    if(!props.isAuth) return <Redirect to='/login'/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder="Enter your message"></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;