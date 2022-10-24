import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsType} from '../../../redux/types';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (newPostText:string)=>void
}

export type FormDataType = {
    newPostText:string
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElement = props.posts.map((p, index) => <Post key={index} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = (formData: FormDataType) => {
        props.addPost(formData.newPostText);
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost}/>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}

let maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
   return (
       <form onSubmit={props.handleSubmit}>
           <div>
               <Field component={Textarea} name="newPostText" validate={[required, maxLength10]} placeholder='Post message'/>
           </div>
           <div>
               <button>Add post</button>
           </div>
       </form>
       )
}

const AddNewPostFormRedux = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;