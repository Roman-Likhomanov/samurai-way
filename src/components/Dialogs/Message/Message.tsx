import React from 'react';
import s from './Message.module.css';
import {MessageType} from '../../../redux/types';
import avatar from '../../../assets/images/avatar.png'

const Message: React.FC<MessageType> = (props) => {
    return <div className={s.message}>
        <img src={avatar}/>
    <div className={s.text}>{props.message}</div>
    </div>
}
export default Message;