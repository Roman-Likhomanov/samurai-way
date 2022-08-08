import React from 'react';
import {RootStateType, UsersType} from '../../redux/store';
import axios from 'axios';
import {connect} from 'react-redux';
import Header from './Header';
import {setAuthUserData} from '../../redux/auth-reducer';
import {authAPI} from '../../api/api';

type MapStatePropsType = {
    isAuth: boolean
    login: string|null
}

type MapDispatchPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, RootStateType> {

    componentDidMount() {
        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <>
            <Header {...this.props}/>
        </>
    }
}

let mapStateToProps = (state: RootStateType):MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {
    setAuthUserData
})(HeaderContainer)

