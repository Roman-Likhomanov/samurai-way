import React from 'react';
import {ProfileType, RootStateType} from '../../redux/store';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getProfile, getStatus, savePhoto, updateStatus} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router-dom';
import {compose} from 'redux';

type RouteParams = {
    userId: string
}

type MapStatePropsType = {
    profile: null | ProfileType
    status: string
    authoraizedUserId: number | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type ProfileContainerPropsType = RouteComponentProps<RouteParams> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType, {}> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(this.props.authoraizedUserId)
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return <div>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus} isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}/>
        </div>
    }
}

let mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authoraizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto}),
    withRouter
)(ProfileContainer)