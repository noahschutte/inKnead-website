import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// require('./stylesheets/responsive_web.scss');
// require('./stylesheets/mobile_responsive.scss');
require('./stylesheets/home.scss');
require('./stylesheets/platform.scss');
require('./stylesheets/how_to.scss');
require('./stylesheets/request.scss');
require('./stylesheets/one_step.scss');
require('./stylesheets/creators.scss');
require('./stylesheets/subscribe.scss')
require('./stylesheets/footer.scss');
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
