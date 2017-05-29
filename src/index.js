import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Timer from './components/Timer';
import Ticker from './components/Ticker';
import Toggle from './components/Toggle';
import LoginControl from './components/LoginControl';
import MailBox from './components/MailBox';

ReactDOM.render(
    <div>
        <Timer />
        <Ticker />
        <Toggle />
        <LoginControl />
        <MailBox unreadMessagesCount="3"/>
    </div>,
    document.getElementById('root')
);
