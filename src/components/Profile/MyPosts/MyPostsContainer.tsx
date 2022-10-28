import React from 'react';
import {RootStateType} from '../../../redux/types';
import {ProfileActionType, addPostActionCreator, addPostTC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {ActionsType, AppStateType} from '../../../redux/redux-store';

type mapDispatchToPropsType = {
    addPost: (newPostText:string, name: string) => void
}

let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>): mapDispatchToPropsType => {
    return {
        addPost: (newPostText:string, name: string)=>{
            dispatch(addPostTC(newPostText, name))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;