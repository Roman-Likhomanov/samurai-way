import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {DialogsPageType, ProfilePageType} from '../../App';

type ProfilePropsType = {
    state:ProfilePageType
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.state.posts}/>
    </div>
}

export default Profile;