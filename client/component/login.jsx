import React, { Component } from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <div class="loginForm">
        <form>
          <label>
            <input type="text" placeholder="email" required />
          </label>
          <label>
            <input type="password" placeholder="password" required />
          </label>
          <label>
            <button>Submit</button>
          </label>
        </form>
      </div>
    );
  }
}