import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
require('./stylesheets/responsive_web.scss');
require('./stylesheets/mobile_responsive.scss');
require('./stylesheets/main.scss');
require('./stylesheets/platform.scss');
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
