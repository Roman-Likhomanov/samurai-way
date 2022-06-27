import React from 'react';
import ReactDOM from 'react-dom';
import state, {subscribe} from './redux/state';
import './index.css';
import App, {RootStateType} from './App';

import {BrowserRouter} from 'react-router-dom';
import {addPost, updateNewPostText} from './redux/state';


let rerenderEntireThree = () => {
        ReactDOM.render(
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                />
            </BrowserRouter>,
            document.getElementById('root')
        )
    }

rerenderEntireThree()

subscribe(rerenderEntireThree)