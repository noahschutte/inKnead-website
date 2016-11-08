import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
require('./stylesheets/main.scss');
require('./stylesheets/responsive_web.scss');
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
