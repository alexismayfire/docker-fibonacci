import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Link to="/">Home</Link>
        <Link to="/other-page">Other Page</Link>
        <div>
          <Route exact path="/" component={Fib} />
          <Route exact path="/other-page" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
