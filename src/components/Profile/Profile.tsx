import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div className={s.content}>
        <div>
            ava + description
        </div>
        <div>
           <MyPosts/>
        </div>
    </div>
}

export default Profile;