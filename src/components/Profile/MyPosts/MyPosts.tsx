import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsType} from '../../../redux/types';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';
import {useAppSelector} from '../../../redux/redux-store';

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (newPostText: string, name: string) => void
}

export type FormDataType = {
    newPostText: string
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const nameUser = useAppSelector(state => state.auth.login) as string

    let postsElement = props.posts.map((p) => <Post key={p.id} name={p.name}message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = (formData: FormDataType) => {
        props.addPost(formData.newPostText, nameUser);
    }

    return <div className={s.postsBlock}>
        <div className={s.addPost}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}

let maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.addPostForm}>
            <Field component={Textarea} name="newPostText" validate={[required, maxLength10]}/>
            <button>Add post</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;