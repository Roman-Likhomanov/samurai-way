import React from 'react';
import {RootStateType} from '../../redux/store';
import {connect} from 'react-redux';
import Header from './Header';
import {getAuth} from '../../redux/auth-reducer';

type MapStatePropsType = {
    isAuth: boolean
    login: string|null
}

type MapDispatchPropsType = {
    getAuth: () => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, RootStateType> {

    componentDidMount() {
        this.props.getAuth()
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
    getAuth
})(HeaderContainer)

