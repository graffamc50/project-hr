

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//import Index from './views/Index';
import AboutPage from './views/Pages/AboutPage';
import './assets/scss/project-hr.scss';
import './assets/css/nucleo-icons.css';
import './assets/demo/demo.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router basename="/project-hr">
    <Switch>
      <Route path="/components">
        <Redirect to="/project-hr" />
      </Route>
      <Route path="/about" component={AboutPage} />
      <Route path="*">
        <Redirect to="/project-hr" />
      </Route>
    </Switch>
  </Router>
);
