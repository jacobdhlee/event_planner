import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory, hashHistory } from 'react-router';
import Login from './component/login.jsx';
import EventCollection from './component/eventCollection.jsx';

class Event extends React.Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Login} />
        <Route path='/event' component={EventCollection} />
      </Router>
    )
  }
}

ReactDOM.render(
  <Event />,
  document.getElementById("app")
);