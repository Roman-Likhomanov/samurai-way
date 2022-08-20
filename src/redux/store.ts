import {ActionProfileTypes} from './profile-reducer';
import {ActionDialogsTypes} from './dialogs-reducer';
import {ActionUsersTypes} from './users-reducer';


export type StoreType = {
    // _state: RootStateType
    getState: () => RootStateType
    // _callSubscriber:() => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionDialogsTypes | ActionProfileTypes | ActionUsersTypes) => void
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
    auth: AuthDataType
}

export type DialogsPageType = {
    messages: Array <MessageType>
    dialogs:Array<DialogsItemType>
    newMessageBody: string
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
    newPostText: string
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
}


// let store: StoreType = {
//     // _state: {
//     //     profilePage: {
//     //         posts: [
//     //             {id: 1, message: 'Hi, how are you?', likesCount: 0},
//     //             {id: 2, message: 'It\'s my first post', likesCount: 10},
//     //         ],
//     //         newPostText: 'It'
//     //     },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Dimych'},
//                 {id: 2, name: 'Andrey'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Sasha'},
//                 {id: 5, name: 'Victor'},
//                 {id: 6, name: 'Batman'}
//             ],
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'How are you?'},
//                 {id: 3, message: 'Hello'},
//                 {id: 4, message: 'One'},
//                 {id: 5, message: 'two'},
//             ],
//             newMessageBody:''
//         }
//     },
//     // _callSubscriber() {
//     //     console.log('state change')
//     // },
//     getState() {
//         return this._state
//     },
//     subscribe(observer: () => void) {
//         this._callSubscriber = observer
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action )
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action )
//         this._callSubscriber()
//     }
// }
//
// export default store;