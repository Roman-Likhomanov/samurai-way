import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {
    ActionTypes,
    PostsType
} from '../../../redux/store';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch:(action: ActionTypes) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
            props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        if(newPostElement.current) {
            props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value))

        }
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
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