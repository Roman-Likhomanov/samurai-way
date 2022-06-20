import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {RootStateType} from './App';

import {BrowserRouter} from 'react-router-dom';
import {addPost} from './redux/state';


export let rerenderEntireThree = (state: RootStateType) => {
        ReactDOM.render(
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}/>
            </BrowserRouter>,
            document.getElementById('root')
        )
    }
;