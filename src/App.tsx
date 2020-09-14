import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function Root() {
  return (
    <h1>Root</h1>
  );
}

function Hello() {
  return (
    <h1>Hello</h1>
  );
}

function Counter() {
  return (
    <h1>Counter</h1>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <Link to="/">Home</Link>
          {' '}
          <Link to="/hello">Hello</Link>
          {' '}
          <Link to="/counter">Counter</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Root} />
          <Route path="/hello" component={Hello} />
          <Route path="/counter" component={Counter} />
          {/* <Route component={App} /> */}
        </Switch>
      </header>
    </div>
  );
}

export default App;
