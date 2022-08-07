import React from 'react';
import {RootStateType} from '../../../redux/store';
import {ActionProfileTypes, addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch:(action: ActionProfileTypes) => void) => {
    return {
        updateNewPostText: (text:string)=>{
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: ()=>{
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;