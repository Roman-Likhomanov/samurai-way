import React from 'react';
import {ProfileType, RootStateType} from '../../redux/store';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router-dom';
import {compose} from 'redux';

type RouteParams = {
    userId: string
}

type MapStatePropsType = {
    profile: null|ProfileType
    status: string
}

type MapDispatchPropsType = {
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type ProfileContainerPropsType = RouteComponentProps<RouteParams> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType, {}> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId='21936'
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return <div>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
            updateStatus={this.props.updateStatus}/>
        </div>
    }
}

let mapStateToProps = (state: RootStateType):MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer)