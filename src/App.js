import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <ol style={{ textAlign: 'left' }}>
            <li>
              Please make sure that each of below tasks is made in a separate
              git commit. Try not to use any external libraries, only a form
              library (like "formik" or anything you like using) is allowed.
            </li>
            <li>
              Import todos from ./src/todos.js and display them however you
              want.
            </li>
            <li>Add the possibility to make a task completed/uncompleted.</li>
            <li>
              Add the possibility to create new todos, with a form fields
              "title" and "description" and a button.
            </li>
            <li>
              Add a validation to "title" and "description" fields, show a
              proper message if a user tries to create a new todo with a not
              filled field.
            </li>
            <li>Add a way to remove todos (but only for completed ones).</li>
            <li>
              Optionally (not a must have), add todos sorting with drag and
              drop, use{' '}
              <a
                href="https://github.com/atlassian/react-beautiful-dnd"
                target="_blank"
              >
                react-beautiful-dnd library
              </a>
              .
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
