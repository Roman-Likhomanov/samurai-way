import React from 'react';
import s from './Post.module.css';
import avatar from '../../../../assets/images/avatar.png'

type PostPropsType = {
    name: string
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return <div>
        <div className={s.item}>
            <div className={s.name}>
                <img src={avatar}/>
                <p>{props.name}</p>
            </div>
            <div className={s.message}>
                <p>{props.message}</p>
            </div>
            <div className={s.likes}>
                <span>Likes:{props.likesCount}</span>
            </div>
        </div>
    </div>

}

export default Post;