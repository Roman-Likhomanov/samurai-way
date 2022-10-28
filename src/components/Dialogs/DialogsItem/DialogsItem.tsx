import React from 'react';
import s from './DialogsItem.module.css';
import {NavLink} from 'react-router-dom';
import {DialogsItemType} from '../../../redux/types';
import avatar from '../../../assets/images/avatar.png'

const DialogsItem: React.FC<DialogsItemType> = (props) => {
    let path = '/dialogs/' + props.id;
    let isActive = () => {
        return props.id === path[path.length] ? `${s.link} ${s.active}` : `${s.link}`;
    }
    return (
        <div className={s.item}>
            <img src={avatar}/>
            <NavLink to={path} className={isActive}>{props.name}</NavLink>
        </div>
    )
}
export default DialogsItem;