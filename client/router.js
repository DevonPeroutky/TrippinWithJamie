import React from 'react'
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// Layouts

// Pages
import App from './modules/App.js'
import Template from './modules/Template.js'
import Admin from './modules/Admin.js'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Template}/>
      <Route path="/admin" component={Admin}/>
    </Route>
  </Router>
);