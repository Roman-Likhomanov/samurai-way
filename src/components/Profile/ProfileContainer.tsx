import React from 'react';
import {ProfileType, RootStateType, UsersType} from '../../redux/store';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getProfile, setUserProfile} from '../../redux/profile-reducer';
import {Redirect, withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router-dom';

type RouteParams = {
    userId: string
}

type MapStatePropsType = {
    profile: null|ProfileType
    isAuth: boolean
}

type MapDispatchPropsType = {
    getProfile: (userId: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type ProfileContainerPropsType = RouteComponentProps<RouteParams> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType, RootStateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId='2'
        }
        this.props.getProfile(userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to='/login'/>
        return <div>
            <Profile profile={this.props.profile}/>
        </div>
    }
}

let mapStateToProps = (state: RootStateType):MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    getProfile
})(withUrlDataContainerComponent)