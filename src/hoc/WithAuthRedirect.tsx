import {Redirect} from 'react-router-dom';
import React, {ComponentType} from 'react';
import {RootStateType} from '../redux/types';
import {connect} from 'react-redux';

type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: RootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: MapStatePropsType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to="/login"/>
        return <Component {...restProps as T}/>
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}

