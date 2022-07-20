import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsType} from '../../../redux/store';

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    updateNewPostText: (text:string)=>void
    addPost: ()=>void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        if(newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}

export default MyPosts;