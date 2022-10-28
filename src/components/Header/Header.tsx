import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import facebook from '../../assets/images/facebook.png'

type HeaderPropsType = {
    isAuth: boolean
    login: string|null
    logout: ()=>void
}

const Header: React.FC<HeaderPropsType> = (props) => {
    return <header className={s.header}>
        <img src={facebook}/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div><span>{props.login}</span><button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'./login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;