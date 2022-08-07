import React from 'react';
import {ProfileType, RootStateType, UsersType} from '../../redux/store';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router-dom';

type RouteParams = {
    userId: string
}

type MapStatePropsType = {
    profile: null|ProfileType
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type ProfileContainerPropsType = RouteComponentProps<RouteParams> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType, RootStateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId='2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <div>
            <Profile profile={this.props.profile}/>
        </div>
    }
}

let mapStateToProps = (state: RootStateType):MapStatePropsType => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile
})(withUrlDataContainerComponent)