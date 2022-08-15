import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {UsersType} from '../../redux/store';

type HeaderPropsType = {
    isAuth: boolean
    login: string|null
}

const Header: React.FC<HeaderPropsType> = (props) => {
    return <header className={s.header}>
        <img src="https://www.pngmart.com/files/2/Superman-Logo-PNG-Image.png"/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login :
            <NavLink to={'./login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;