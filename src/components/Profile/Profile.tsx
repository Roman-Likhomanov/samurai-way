import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../App';

export type ProfilePropsType = {
    state:ProfilePageType
    addPost:(postMessage:string)=>void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
   debugger
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.state.posts} addPost={props.addPost}/>
    </div>
}

export default Profile;