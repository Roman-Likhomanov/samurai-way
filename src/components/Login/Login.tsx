import React from 'react'
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {RootStateType} from '../../redux/types';
import styles from '../common/FormsControls/FormsControls.module.css';
import s from './Login.module.css';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
}

type LoginPropsType = MapStatePropsType & MapDispatchPropsType

type CaptchaType = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, CaptchaType> & CaptchaType> = ({
                                                                                             handleSubmit,
                                                                                             error,
                                                                                             captchaUrl
                                                                                         }) => {
    return (
        <div className={s.wrapper}>
            <form onSubmit={handleSubmit} className={s.loginWrapper}>
                <div className={s.text}>
                    <p><b>Email:</b> free@samuraijs.com</p>
                    <p><b>Password:</b> free</p>
                </div>
                {createField('Email', 'email', [required], Input)}
                {createField('Password', 'password', [required], Input, {type: 'password'})}
                {createField('', 'rememberMe', [], Input, {type: 'checkbox'}, 'Remember me')}

                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && createField('Symbols from image', 'captcha', [required], Input, {})}
                {
                    error && <div className={styles.formSummaryError}>
                        {error}
                    </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm<FormDataType, CaptchaType>({
    form: 'login'
})(LoginForm)

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login)