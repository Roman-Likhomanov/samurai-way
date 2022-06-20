import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {rerenderEntireThree} from './render';
import state from './redux/state';

rerenderEntireThree(state);