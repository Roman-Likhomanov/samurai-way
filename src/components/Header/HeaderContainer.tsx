import React from 'react';
import {RootStateType} from '../../redux/store';
import {connect} from 'react-redux';
import Header from './Header';
import {getAuth, logout} from '../../redux/auth-reducer';

type MapStatePropsType = {
    isAuth: boolean
    login: string|null
}

type MapDispatchPropsType = {
    getAuth: () => void
    logout: () => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {

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
    getAuth, logout
})(HeaderContainer)

