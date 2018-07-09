import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Navbar from './components/customNavBar';
import Events from './components/events';

class App extends Component {
  render() {
    return (
<Router>
  <div>
    <Navbar />
    <Route exact path="/" component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/event" component={Events} />

    </div>
</Router>
    );
  }
}

export default App;

