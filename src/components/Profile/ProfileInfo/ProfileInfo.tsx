import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import {ProfileType} from '../../../redux/store';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

type ProfileInfoType = {
    profile: null|ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfoType> = ({profile, status, updateStatus}) => {
    if(!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.small}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo