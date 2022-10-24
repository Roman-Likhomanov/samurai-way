import React from 'react';
import {RootStateType} from '../../redux/types';
import {connect} from 'react-redux';
import Header from './Header';
import {logout} from '../../redux/auth-reducer';

type MapStatePropsType = {
    isAuth: boolean
    login: string|null
}

type MapDispatchPropsType = {
    logout: () => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {

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

export default connect(mapStateToProps, {logout})(HeaderContainer)

