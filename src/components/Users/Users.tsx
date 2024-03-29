import React from 'react'
import {UsersType} from '../../redux/types';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

type UserPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
}

const Users: React.FC<UserPropsType> = ({
                                            totalUsersCount, pageSize, currentPage, onPageChanged,
                                            users, ...props
                                        }) => {
    return <div>
        <div>
            {
                users.map(u => <User key={u.id}
                                     user={u}
                                     followingInProgress={props.followingInProgress}
                                     follow={props.follow}
                                     unfollow={props.unfollow}
                    />
                )
            }
        </div>
        <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                   onPageChanged={onPageChanged}/>
    </div>
}

export default Users;