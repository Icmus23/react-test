import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Timer from './components/timer.jsx';
import Ticker from './components/ticker.jsx';
import Toggle from './components/toggle.jsx';

ReactDOM.render(
    <div>
        <Timer />
        <Ticker />
        <Toggle />
    </div>,
    document.getElementById('root')
);
