import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    name: string
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return <div>
        <div className={s.item}>
            <div className={s.name}>
                <img src="https://html5css.ru/howto/img_avatar.png"/>
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