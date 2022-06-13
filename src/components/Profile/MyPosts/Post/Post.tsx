import React from 'react';
import s from './Post.module.css';
import {PostsType} from '../../../../App';

const Post = (props:PostsType) => {
    return <div>
        <div className={s.item}>
            <img src="https://www.nicepng.com/png/full/66-661696_superman-icon.png"/>
            {props.message}
            <div>
                <span>like</span>{props.likesCount}
            </div>
        </div>
    </div>

}

export default Post;