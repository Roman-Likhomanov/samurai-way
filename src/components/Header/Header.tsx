import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean
    login: string|null
    logout: ()=>void
}

const Header: React.FC<HeaderPropsType> = (props) => {
    return <header className={s.header}>
        <img src="https://www.pngmart.com/files/2/Superman-Logo-PNG-Image.png"/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'./login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;