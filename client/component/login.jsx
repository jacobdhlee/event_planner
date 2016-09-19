import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Login extends React.Component {
  render() {
    return (
      <div class="loginForm">
        <form>
          <label>
            <input class="" type="text" placeholder="email" required/>
          </label>
          <label>
            <input class="" type="password" placeholder="password" required/>
          </label>
          <label>
            <button class="submit">Submit</button>
          </label>
        </form>
      </div>
    )
  }
}