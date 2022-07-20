import React from 'react';
import {connect} from 'react-redux';
import {ActionTypes, RootStateType, UsersType} from '../../redux/store';
import Users from './Users';
import {followAC, setUsersAC, unfollowAC} from '../../redux/users-reducer';

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;