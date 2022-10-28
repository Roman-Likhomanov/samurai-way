import React from 'react';
import {RootStateType} from '../../../redux/types';
import {ProfileActionType, addPostActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch:(action: ProfileActionType) => void) => {
    return {
        addPost: (newPostText:string, name: string)=>{
            dispatch(addPostActionCreator(newPostText, name))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;