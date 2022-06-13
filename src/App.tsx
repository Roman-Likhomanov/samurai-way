import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

type AppPropsType = {
    state: RootStateType
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
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
}

export type PostsType = {
    message: string
    likesCount: number
}

const App: React.FC<AppPropsType> = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path="/profile" render={() => <Profile state={props.state.profilePage}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
    );
}

export default App;
