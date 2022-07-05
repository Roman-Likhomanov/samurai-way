import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


let rerenderEntireThree = () => {
        ReactDOM.render(
            <BrowserRouter>
                <App state={store.getState()}
                     dispatch={store.dispatch.bind(store)}
                     store={store}
                />
            </BrowserRouter>,
            document.getElementById('root')
        )
    }

rerenderEntireThree()

store.subscribe(rerenderEntireThree)