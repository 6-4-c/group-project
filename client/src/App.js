import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Navbar from './components/customNavBar';
// import CreateEvent from './components/createevent';

class App extends Component {
  render() {
    return (
<Router>
  <div>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    {/* <Route path="/createevent" component={CreateEvent} /> */}

    </div>
</Router>
    );
  }
}

export default App;

