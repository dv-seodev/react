import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost } from './redux/state';
import { rerenderTree } from './render';
import state from './redux/state'

//addPost('lalala');

rerenderTree(state);

reportWebVitals();
