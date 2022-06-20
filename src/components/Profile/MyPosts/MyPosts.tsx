import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsType, ProfilePageType} from '../../../App';
import {ProfilePropsType} from '../Profile';

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost:(postMessage:string)=>void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if(newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value=''
        }
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}

export default MyPosts;