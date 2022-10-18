import React from 'react';
import {RootStateType} from '../../../redux/store';
import {ActionProfileTypes, addPostActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch:(action: ActionProfileTypes) => void) => {
    return {
        addPost: (newPostText:string)=>{
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;