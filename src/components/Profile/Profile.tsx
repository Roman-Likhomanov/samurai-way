import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/store';

type ProfilePropsType = {
    profile: null|ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
        isOwner={props.isOwner} savePhoto={props.savePhoto}/>
        <MyPostsContainer
        />
    </div>
}

export default Profile;