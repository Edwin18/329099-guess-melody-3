import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';

const ERRORS_COUNT = 5;

ReactDOM.render(
    <App
      errorsCount = {ERRORS_COUNT}
    />,
    document.querySelector(`#root`)
);
