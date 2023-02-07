import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <App />
    </Router>
);