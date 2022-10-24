import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/types';

type ProfilePropsType = {
    profile: null|ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
    saveProfile: (profile: ProfileType) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
        isOwner={props.isOwner} savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
        <MyPostsContainer
        />
    </div>
}

export default Profile;