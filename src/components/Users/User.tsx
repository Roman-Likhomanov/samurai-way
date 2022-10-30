import React from 'react'
import styles from './users.module.css';
import avatar from '../../assets/images/avatar.png';
import {NavLink} from 'react-router-dom';
import {UsersType} from '../../redux/types';
import s from './users.module.css';

type UserPropsType = {
    user: UsersType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}

const User: React.FC<UserPropsType> = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div className={s.userBox}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : avatar} className={styles.userPhoto}/>
                </NavLink>
            </div>
            <div className={s.userDataBox}>
                <div className={s.name}>{user.name}</div>
                <div className={s.userData}>{'u.location.country'}</div>
                <div className={s.userData}>{'u.location.city'}</div>
            </div>
            <div>
                {user.followed ?
                    <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)
                    }}>Unfollow</button> :
                    <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }
                    }>Follow</button>}
            </div>
        </div>)

}

export default User;