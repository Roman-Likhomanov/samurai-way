import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/store';

type ProfilePropsType = {
    profile: null|ProfileType
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer
        />
    </div>
}

export default Profile;