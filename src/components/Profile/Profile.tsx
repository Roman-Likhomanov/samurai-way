import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../App';

export type ProfilePropsType = {
    profilePage:ProfilePageType
    addPost:()=>void
    updateNewPostText:(newText:string)=>void
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 addPost={props.addPost}
                 newPostText={props.profilePage.newPostText}
                 updateNewPostText={props.updateNewPostText}
        />
    </div>
}

export default Profile;