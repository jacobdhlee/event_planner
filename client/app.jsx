import React from 'react';
import ReactDOM from 'react-dom';
import Login from './component/login.jsx';

class Event extends React.Component {

  render() {
    return (
      <div>
        <h1>Hello Event</h1>
        <h1>check this is work</h1>
        <Login />
      </div>
    )
  }
}

ReactDOM.render(
  <Event />,
  document.getElementById("app")
);