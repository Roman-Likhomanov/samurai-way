import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import {ProfileType} from '../../../redux/store';
import ProfileStatus from './ProfileStatus';

type ProfileInfoType = {
    profile: null|ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/1345014/10fbf771bd75965d188bb879acdb2144/960x540"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo