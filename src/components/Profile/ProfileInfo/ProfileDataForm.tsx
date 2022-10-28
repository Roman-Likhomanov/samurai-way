import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input, Textarea} from '../../common/FormsControls/FormsControls';
import s from './ProfileInfo.module.css';
import style from '../../common/FormsControls/FormsControls.module.css';
import React from 'react';
import {ProfileType} from '../../../redux/types';

export type FormDataType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}

type ProfileDataFormProps = {
   profile: ProfileType
}

const ProfileDataForm: React.FC<InjectedFormProps<FormDataType,ProfileDataFormProps> & ProfileDataFormProps> = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit} className={s.profileDataForm}>

        <div><button>save</button></div>
        { error && <div className={style.formSummaryError}>
                    {error}
                </div>
            }
        <div>
            <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
        </div>
        <div>
            <b>My professional skills</b>:
            {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>
        <div>
            <b>About me</b>:
            {createField("About me", "aboutMe", [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                </div>
            })}
        </div>

    </form>
}

const ProfileDataFormReduxForm = reduxForm<FormDataType,ProfileDataFormProps>({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;