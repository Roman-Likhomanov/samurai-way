import {ProfileActionType} from './profile-reducer';
import {DialogsActionType} from './dialogs-reducer';
import {UsersActionType} from './users-reducer';
import {AuthActionType} from './auth-reducer';


export type StoreType = {
    // _state: RootStateType
    getState: () => RootStateType
    // _callSubscriber:() => void
    subscribe: (observer: () => void) => void
    dispatch: (action: DialogsActionType | ProfileActionType | UsersActionType|AuthActionType) => void
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
    auth: AuthDataType
    app: AppDataType
}

export type DialogsPageType = {
    messages: Array <MessageType>
    dialogs:Array<DialogsItemType>
}

export type MessageType = {
    message: string
    id: number
}
export type DialogsItemType = {
    name: string
    id: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    profile: null|ProfileType
    status: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string|null
        vk: string
        twitter: string
        instagram: string
        youtube: string|null
        github: string
        mainLink: string|null
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string|undefined
        large: string|undefined
    }
}

export type UsersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type UsersType = {
    id: number
    photos: {
        small: string | undefined
        large: string | undefined
    }
    followed: boolean
    name: string
    status: string
    location: {
        city: string
        country: string
    }
}

export type AuthDataType = {
    userId: number|null
    email: string|null
    login: string|null
    isAuth: boolean
    captchaUrl: string|null
}

export type AppDataType = {
    initialized: boolean
}


