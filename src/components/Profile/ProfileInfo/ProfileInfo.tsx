import React, {ChangeEvent, useRef, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import {ProfileType} from '../../../redux/types';
import userPhoto from '../../../assets/images/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import photoicon from '../../../assets/images/photoicon.svg'
import ProfileDataForm, {FormDataType} from './ProfileDataForm';

type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
    saveProfile: (profile: any) => any
}

type ProfileDataType = {
    profile: ProfileType | null
    isOwner: boolean
    goToEditMode: () => void
}

type ContactType = {
    contactTitle: string
    contactValue: string | null
}


const ProfileInfo: React.FC<ProfileInfoType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null)

    const selectFileHandler = () => {
        inputRef && inputRef.current?.click()
    }

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: FormDataType) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            });
    };

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.profileAvatarBox}>
                    <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                    {isOwner && <div className={s.photoButton} onClick={selectFileHandler}>
                        <img src={photoicon} alt="photoicon"/>
                    </div>}
                    <input style={{display: 'none'}}
                           ref={inputRef}
                           type="file"
                           accept="image/*"
                           onChange={uploadHandler}
                    />
                </div>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

const ProfileData: React.FC<ProfileDataType> = ({ profile, isOwner, goToEditMode }) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div>
            <b>Full name</b>: {profile && profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile && profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile && profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile && profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me</b>: {profile && profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {profile && Object.keys(profile.contacts).map(key =>  {
            return <Contact key={key} contactTitle={key} contactValue={
               profile.contacts[key as keyof typeof profile.contacts ]} />
        })   }
        </div>
    </div>
}

const Contact: React.FC<ContactType> = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo